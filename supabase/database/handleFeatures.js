import supabase from "../config";

class FeaturesClass {
  constructor() {
    this.table_name = "features";
    this.table_categories = "feature_cats";
  }

  async getCategories() {
    let { data: res } = await supabase.from("feature_cats").select();
    if (!res) {
      return null;
    }
    return res;
  }

  async getAll() {
    let { data: res } = await supabase.from(this.table_name).select();
    if (!res) {
      return null;
    }
    return res;
  }

  async getSpecific(query) {
    let { data: res } = await supabase
      .from(this.table_name)
      .select("*")
      .eq(query[0], query[1]);
    return res;
  }

  async getFeatured() {
    let { data: res } = await supabase
      .from(this.table_name)
      .select("*")
      .eq("featured", true);
    return res;
  }
}

const FeatureDB = new FeaturesClass();

export default FeatureDB;
