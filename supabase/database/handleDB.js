import supabase from "../config";

export async function addUser(id, email, f_name, l_name) {
  const { error } = await supabase
    .from("userData")
    .insert({ id: id, email: email, f_name: f_name, l_name: l_name });

  return error;
}

export async function getUserDBDetails(id) {
  const { data, error } = await supabase
    .from("userdata")
    .select("id")
    .eq("id", id);
  return { data, error };
}
