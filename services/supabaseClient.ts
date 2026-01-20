
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://llxrehnwrhspummcypzb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseHJlaG53cmhzcHVtbWN5cHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NzU2MTUsImV4cCI6MjA4NDM1MTYxNX0.PG3LdGYkjE7jPr5yrqmcRvgGZxFqpisIjkNlR63oocw';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);