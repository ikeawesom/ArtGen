import supabase from "../config"

export async function handleSignUp(user, password, f_name, l_name) {
    const { data, error } = await supabase.auth.signUp({
        email: user,
        password: password,
        options: {
            data: {
              first_name: f_name,
              last_name: l_name,
            }
          }
      })
    
    return {data, error}
}

export async function getUserDetails() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
}

export async function handleSignOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {return error}
    else {return "success"}
}