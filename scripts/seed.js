import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seedDatabase() {
  try {
    console.log('🌱 Seeding database with sample data...');

    // Read seed file
    const seedPath = path.join(__dirname, '../supabase/seed.sql');
    const seedSQL = fs.readFileSync(seedPath, 'utf-8');

    // Execute seed
    const { error } = await supabase.rpc('exec', { sql: seedSQL });

    if (error) {
      console.log('⚠️ RPC not available, trying individual inserts...');
      await seedWithQueries();
      return;
    }

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    console.log('\n📋 Manual Seeding Instructions:');
    console.log('1. Go to Supabase Dashboard');
    console.log('2. Open SQL Editor');
    console.log('3. Copy content from: supabase/seed.sql');
    console.log('4. Execute the SQL');
  }
}

async function seedWithQueries() {
  try {
    // Insert sample developers
    const { error: devError } = await supabase
      .from('developers')
      .insert([
        {
          name: 'Ahmad Rizki',
          username: 'ahmadrizki',
          email: 'ahmad@example.com',
          bio: 'Full-stack developer dari Jakarta',
          city: 'Jakarta',
          province: 'DKI Jakarta',
          skills: ['JavaScript', 'Python', 'React'],
          github_url: 'https://github.com/ahmadrizki',
          is_open_collab: true
        },
        {
          name: 'Siti Nurhaliza',
          username: 'sitinur',
          email: 'siti@example.com',
          bio: 'Mobile developer from Bandung',
          city: 'Bandung',
          province: 'Jawa Barat',
          skills: ['Kotlin', 'Flutter', 'Android'],
          github_url: 'https://github.com/sitinur',
          is_open_collab: true
        }
      ]);

    if (devError) console.error('Developer insert error:', devError);
    else console.log('✅ Sample developers inserted');

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('Seeding error:', error);
  }
}

seedDatabase();
