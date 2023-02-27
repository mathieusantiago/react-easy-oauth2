import React from "react";
import "./style.css";
export const SocialConnect = ({ supabase, provider, catchPayload }) => {
  const icons = {
    apple: 'https://app.supabase.com/img/icons/apple-icon.svg',
    bitbucket: 'https://app.supabase.com/img/icons/bitbucket-icon.svg',
    discord: 'https://app.supabase.com/img/icons/discord-icon.svg',
    facebook: 'https://app.supabase.com/img/icons/facebook-icon.svg',
    github: 'https://app.supabase.com/img/icons/github-icon.svg',
    gitlab: 'https://app.supabase.com/img/icons/gitlab-icon.svg',
    google: 'https://app.supabase.com/img/icons/google-icon.svg',
    keycloak: 'https://app.supabase.com/img/icons/keycloak-icon.svg',
    linkedin: 'https://app.supabase.com/img/icons/linkedin-icon.svg',
    microsoft: 'https://app.supabase.com/img/icons/microsoft-icon.svg',
    notion: 'https://app.supabase.com/img/icons/notion-icon.svg',
    slack: 'https://app.supabase.com/img/icons/slack-icon.svg',
    spotify: 'https://app.supabase.com/img/icons/spotify-icon.svg',
    twitch: 'https://app.supabase.com/img/icons/twitch-icon.svg',
    twitter: 'https://app.supabase.com/img/icons/twitter-icon.svg',
    workos: 'https://app.supabase.com/img/icons/workos-icon.svg',
    zoom: 'https://app.supabase.com/img/icons/zoom-icon.svg',
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
      <img src={encodeURI(icons[provider])} alt={provider} width="46" />
    </div>
  );
};
