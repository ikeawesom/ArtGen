import supabase from "../config";

class MainStorage {
  constructor() {}

  async uploadFile(file, bucket, path) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: "3600",
        upsert: true,
      });
    return { data, error };
  }

  getUrl(bucket, file) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(file);
    return data;
  }
}

const mainStorage = new MainStorage();

export default mainStorage;
