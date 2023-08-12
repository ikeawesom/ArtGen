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
}
const profilesDB = new mainProfilesDB("profiles");

export default profilesDB;
