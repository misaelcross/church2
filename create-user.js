const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nojmewcenqotctoowklx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vam1ld2NlbnFvdGN0b293a2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NjU1MDcsImV4cCI6MjA1MDE0MTUwN30.AVDF2tFa5wVOoiEUzOb6-eyTkIf3irUmR0CV2A4h5-0'
);

async function verifyUser(email) {
  try {
    // Forçar verificação do email em desenvolvimento
    const { error } = await supabase
      .from('auth.users')
      .update({ email_confirmed_at: new Date().toISOString() })
      .eq('email', email);

    if (error) throw error;

    console.log(`Usuário ${email} verificado com sucesso!`);
  } catch (error) {
    console.error(`Erro ao verificar usuário ${email}:`, error.message);
  }
}

verifyUser('misael@gmail.com');