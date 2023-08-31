import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zlenziqovccnttlhlqab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZW56aXFvdmNjbnR0bGhscWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0NTcwMjcsImV4cCI6MjAwOTAzMzAyN30.uPGNZtuG0wf4pmSKYGINnmnN5BuUBwoW1Zy6bUal-no";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
