import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

const STALE_DAYS = 180; // 6 months

async function checkStaleProjects() {
  try {
    console.log('🔍 Checking for stale projects...');

    // Find projects not updated in 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setDate(sixMonthsAgo.getDate() - STALE_DAYS);

    const { data: staleProjects, error } = await supabase
      .from('projects')
      .select('id, name, slug, author_id, updated_at, developer:developers(*)')
      .lt('updated_at', sixMonthsAgo.toISOString())
      .eq('status', 'active');

    if (error) {
      console.error('❌ Error fetching projects:', error);
      return;
    }

    console.log(`📧 Found ${staleProjects.length} stale projects`);

    // Send notifications
    for (const project of staleProjects) {
      const developer = project.developer;
      if (!developer || !developer.email) continue;

      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'noreply@karyogit.id',
          to: developer.email,
          subject: `📢 [KARYOGIT] Proyek "${project.name}" belum diperbarui`,
          html: `
            <h2>Halo ${developer.name}!</h2>
            <p>Proyek <strong>"${project.name}"</strong> belum diperbarui selama ${STALE_DAYS} hari.</p>
            <p>Apakah proyek ini masih aktif? Silakan update dokumentasi atau rilis versi terbaru.</p>
            <p>
              <a href="https://karyogit.id/project/${project.slug}">Lihat Proyek</a>
            </p>
            <p>Jika proyek ini sudah tidak aktif, kami akan mengubah statusnya menjadi "archived".</p>
          `
        });

        console.log(`✓ Notification sent to ${developer.name}`);
      } catch (error) {
        console.error(`⚠️ Error sending email to ${developer.email}:`, error);
      }
    }

    console.log('✅ Stale project check completed!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run check
checkStaleProjects();
