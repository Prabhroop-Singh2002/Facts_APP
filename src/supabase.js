import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://slsdzusmmjptxfpumxfv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsc2R6dXNtbWpwdHhmcHVteGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MDYyMjgsImV4cCI6MTk5NTE4MjIyOH0.5RqEy9P0gHl0sjScryeHEhf5ArLkxqIYd5JmtnJz80A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
