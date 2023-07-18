import supabase from "../config";
import { DEFAULT_URL } from "@/app/globals";

export async function handleSignUp(user, password, f_name, l_name) {
  const { data, error } = await supabase.auth.signUp({
    email: user,
    password: password,
    options: {
      data: {
        first_name: f_name,
        last_name: l_name,
      },
    },
  });

  return error;
}

export async function getUserDetails() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return { user, error };
}

export async function handleSignOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error;
  } else {
    return "success";
  }
}

export async function handleSignIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
}

export async function handleSendPasswordResetEmail(email) {
  // const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${DEFAULT_URL}/account/forgot_password`,
  });
  return { data, error };
}
