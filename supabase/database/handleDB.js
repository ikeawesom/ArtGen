import supabase from "../config";

export async function getAllData(table) {
  let { data: features } = await supabase.from(table).select();
  return features;
}
