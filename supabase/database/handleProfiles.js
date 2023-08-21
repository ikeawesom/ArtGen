import mainDBClass from "./handleDB";
import supabase from "../config";

class mainProfilesDB extends mainDBClass {
  constructor(table_name) {
    super();
    this.table_name = table_name;
  }

  async setUsername(value, id) {
    const { error } = await supabase
      .from(this.table_name)
      .update({ display_name: value })
      .eq("id", id);

    if (error) return error;
    return "success";
  }

  async setName(f_name, l_name, id) {
    const { error } = await supabase
      .from(this.table_name)
      .update({ first_name: f_name, last_name: l_name })
      .eq("id", id);

    if (error) return error;
    return "success";
  }

  async setGit(url, id) {
    const { error } = await supabase
      .from(this.table_name)
      .update({ github_url: url })
      .eq("id", id);

    if (error) return error;
    return "success";
  }

  async setLinked(url, id) {
    const { error } = await supabase
      .from(this.table_name)
      .update({ linkedin_url: url })
      .eq("id", id);

    if (error) return error;
    return "success";
  }
}
const profilesDB = new mainProfilesDB("profiles");

export default profilesDB;
