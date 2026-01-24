import { createClient } from "@supabase/supabase-js";
// original recalled line import 
// { class.name } from supabase@supabase

// I forgot that the library must be put between double quotes ""
// Also, as I suppose I can use supabase with different programming 
// languages, I need to specify with which I am working now. 

// Original lines recalled
// const supabase.key = meta.create_method.VITE = supabase.key;
// const supabase.url = meta.create_method.VITE = supabase.url;

// I don't remember if JS has object oriented programming but it 
// seems that I can simply create two different variables instead of
// putting those values as attributes of the 'supabase' object

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; 

// Original lines recalled
// const supabase create_connection(supabase.key, supabase.url)

// Here I forgot to put the asignment symbol

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 


