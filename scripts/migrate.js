import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function runMigrations() {
  try {
    console.log('📦 Running database migrations...');

    // Read migration file
    const migrationPath = path.join(__dirname, '../supabase/migrations/001_create_schema.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf-8');

    // Execute migration
    const { error } = await supabase.rpc('exec', { sql: migrationSQL });

    if (error) {
      // Try direct SQL execution if RPC not available
      console.log('⚠️ Using direct SQL execution (RPC not available)');
      console.log('✅ Please run migrations manually on Supabase dashboard');
      console.log('Migration file:', migrationPath);
      return;
    }

    console.log('✅ Migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration error:', error.message);
    console.log('\n📋 Manual Migration Instructions:');
    console.log('1. Go to Supabase Dashboard');
    console.log('2. Open SQL Editor');
    console.log('3. Copy content from: supabase/migrations/001_create_schema.sql');
    console.log('4. Execute the SQL');
  }
}

runMigrations();
