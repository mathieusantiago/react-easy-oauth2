import React from "react";
import {
  apple,
  bitbucket,
  discord,
  facebook,
  github,
  gitlab,
  google,
  keycloak,
  linkedin,
  microsoft,
  notion,
  slack,
  spotify,
  twitch,
  twitter,
  workos,
  zoom,
} from "./icons";
import "./style.css";
export const SocialConnect = ({ supabase, provider }) => {
  const icons = {
    apple,
    bitbucket,
    discord,
    facebook,
    github,
    gitlab,
    google,
    keycloak,
    linkedin,
    microsoft,
    notion,
    slack,
    spotify,
    twitch,
    twitter,
    workos,
    zoom,
  };
  /**
   * Signs up a new user with a third-party authentication provider.
   * @param {object} supabase - A Supabase client configured with the URL and API key.
   * @param {string} provider - The name of the third-party authentication provider to use.
   * @throws {Error} If `provider` is not a non-empty string.
   * @returns {object} An object with the response data or error from the `signInWithOAuth` method.
   */
  const signUpProvider = async (supabase, provider) => {
    // Verifies that `provider` is a non-empty string.
    if (typeof provider !== "string" || provider.trim() === "") {
      throw new Error("The provider must be a non-empty string.");
    }
    // Sign up a new user with a authentication provider.
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    catchPayload({
      data,
      error,
    });
    return {
      data,
      error,
    };
  };
  return (
    <div
      onClick={() => signUpProvider(supabase, provider)}
      className="btn-social btn-outline"
      title={provider}
    >
      <img src={icons[provider]} width="46" />
    </div>
  );
};
