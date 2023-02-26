import "../../styles.css";
import React, { useEffect, useState } from "react";
import { SocialConnect } from "./SocialConnect/SocialConnect";
import { createClient } from "@supabase/supabase-js";

/**
   * Sets up the Supabase environment by creating a client from the given URL and key.
   * @param {string} url - The URL of your Supabase project.
   * @param {string} key - The API key for your Supabase project.
   * @throws {Error} If `url` or `key` is not a non-empty string.
   * @returns {object} A Supabase client configured with the given URL and key.
 */
export const FormConnect = ({ url, apiKey, provider, catchPayload }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [supabase, setSupabase] = useState("");

  if (typeof url !== "string" || url.trim() === "") {
    throw new Error("The url must be a non-empty string.");
  }
  if (typeof apiKey !== "string" || apiKey.trim() === "") {
    throw new Error("The apiKey must be a non-empty string.");
  }

  useEffect(() => {
    setSupabase(() => supabaseConfig(url, apiKey));
  }, []);

  /**
   * Sets up the Supabase environment by creating a client from the given URL and key.
   * @param {string} url - The URL of your Supabase project.
   * @param {string} key - The API key for your Supabase project.
   * @throws {Error} If `url` or `key` is not a non-empty string.
   * @returns {object} A Supabase client configured with the given URL and key.
   */
  const supabaseConfig = (url, apiKey) => {
    // Verify that `url` is a non-empty string.
    if (typeof url !== "string" || url.trim() === "") {
      throw new Error("L'URL doit être une chaîne de caractères non vide.");
    }
    // Verify that `apiKey` is a non-empty string.
    if (typeof apiKey !== "string" || apiKey.trim() === "") {
      throw new Error("La clé doit être une chaîne de caractères non vide.");
    }
    //creating a client from the given URL and apiKey
    const supabase = createClient(url, apiKey);
    return supabase;
  };

  /**
   * Signs up a new user with an email address and password.
   * @param {object} supabase - A Supabase client configured with the URL and API key.
   * @param {string} email - The email address of the user to sign up.
   * @param {string} password - The password of the user to sign up.
   * @throws {Error} If `email` or `password` is not a non-empty string.
   * @returns {object} An object with the response data or error from the `signUp` method.
   */
  const signUpEmail = async (supabase, email, password) => {
    // Verifies that `email` is a non-empty string.
    if (typeof email !== "string" || email.trim() === "") {
      throw new Error("The email address must be a non-empty string.");
    }
    // Verifies that `password` is a non-empty string.
    if (typeof password !== "string" || password.trim() === "") {
      throw new Error("The password must be a non-empty string.");
    }
    // Sign up a new user with an email address and password.
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    catchPayload({ data, error });
    return {
      data,
      error,
    };
  };

  return (
    <div className="FormConnect">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Create an Account</h1>
            <p>Get started for free!</p>
          </div>
          <div>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              className="signup-btn"
              onClick={() => signUpEmail(supabase, email, password)}
              type="button"
              value="SIGN UP"
            />
          </div>
          <p>Or sign up with</p>
          <div>
            {provider.map((prov) => {
              return (
                <SocialConnect key={prov} supabase={supabase} provider={prov} catchPayload={catchPayload}/>
              );
            })}
          </div>
          <p>
            Already have an account <a href="#">sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};
