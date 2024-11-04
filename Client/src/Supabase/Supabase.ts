import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://utwpzulflyhsniyyehpq.supabase.co";
const supabaseKey: any =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0d3B6dWxmbHloc25peXllaHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjgzMzAsImV4cCI6MjA0NjI0NDMzMH0.kQoB4S6UC3VsxM9o0fGHuKbKiK-0rMkvpzZ1WQTsfEw";
export const supabase = createClient(supabaseUrl, supabaseKey);
