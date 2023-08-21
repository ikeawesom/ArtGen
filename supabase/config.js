import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aiwhejprdsdpqdcmyizi.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY;
const supabase = createClient(supabaseUrl, serviceKey);

export const supabaseAdmin = supabase.auth.admin;
export default supabase;

// TODO: PERSISTSESSION = TRUE = PROVIDE STORAGE
// const supabase = createClient(supabaseUrl, supabaseKey, {
//   auth: {
//     autoRefreshToken: true,
//     persistSession: false,
//     detectSessionInUrl: true,
//   },
// });
