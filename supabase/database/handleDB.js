import supabase from "../config";

class mainDBClass {
  constructor(table_name) {
    this.table_name = table_name;
  }

  async getAll() {
    let { data: res } = await supabase.from(this.table_name).select();
    if (!res) {
      return null;
    }
    return res;
  }

  async getSpecific(amt, column, condition) {
    // .eq(column name, query)
    let { data: res } = await supabase
      .from(this.table_name)
      .select(amt)
      .eq(column, condition);
    return res;
  }
}

export default mainDBClass;
