import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xtiwojkekzvasndhxuaku.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpd29qa2VrenZhc25kaHh1YWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NzU4MjQsImV4cCI6MjAxMjI1MTgyNH0.HesInxavj1vV41t3TgrxiXOI8yvguakSjhGa7BAGEF4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
