import { createClient } from '@supabase/supabase-js'

const URL = 'https://wrxptndudlvnrtwialrg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeHB0bmR1ZGx2bnJ0d2lhbHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NTg1MzcsImV4cCI6MjA0NjMzNDUzN30.i5ldGRVm7oVsetf4t-6I1ujdLrMprsdNxvnQBfmUyGM';

export const supabase = createClient(URL, API_KEY);