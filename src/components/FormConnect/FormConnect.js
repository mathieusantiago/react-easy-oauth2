import React, { useEffect, useState } from "react";
import { SocialConnect } from "./SocialConnect/SocialConnect";
import { createClient } from "@supabase/supabase-js";
import "../../styles.css";

/**
 * Sets up the Supabase environment by creating a client from the given URL and key.
 * @param {string} url - The URL of your Supabase project.
 * @param {string} key - The API key for your Supabase project.
 * @throws {Error} If `url` or `key` is not a non-empty string.
 * @returns {object} A Supabase client configured with the given URL and key.
 */
export const FormConnect = ({
  url,
  apiKey,
  provider,
  catchPayload,
  theme,
  field,
  logo,
  useDefault
}) => {
  const [supabase, setSupabase] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [context, setContext] = useState(useDefault === "signIn"? true:false);

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
    const result = {
      field: {
        email,
        firstName,
        lastName,
        address1,
        address2,
        phone,
        city,
        zip,
      },
      data,
      error,
    };
    catchPayload(result);
    return { result };
  };

  return (
    <div className="FormConnect">
      <div style={theme?.bgComponent || {}} className="signup-form">
        {logo?.length > 0 ? (
          <>
            <img src={logo} alt={logo} width="50" />
          </>
        ) : (
          ""
        )}
        <div className="container">
          <div className="header">
            {!context ? (
              <>
                <h1 style={theme?.h1Style || {}}>Create an Account</h1>
                <p style={theme?.textStyle || {}}>Get started for free!</p>
              </>
            ) : (
              <>
                <h1 style={theme?.h1Style || {}}>Connect an Account</h1>
                <p style={theme?.textStyle || {}}>Welcom!</p>
              </>
            )}
          </div>
          <div className="content">
            {field?.includes("fname") && !context ? (
              <div className="input m-1">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            {field?.includes("lname") && !context ? (
              <div className="input">
                <input
                  type="text"
                  placeholder="Laste Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {field?.includes("email") ? (
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            {field?.includes("passwd") ? (
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            {field?.includes("add1") && !context ? (
              <div className="input">
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            {field?.includes("add2") && !context ? (
              <div className="input">
                <input
                  type="text"
                  placeholder="Address2"
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            {field?.includes("phone") && !context ? (
              <div className="input">
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            <div className="content">
              {field?.includes("city") && !context ? (
                <div className="input">
                  <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              ) : (
                ""
              )}
              {field?.includes("zip") && !context ? (
                <div className="input zip">
                  <input
                    type="text"
                    placeholder="Zip"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <input
              className="signup-btn"
              onClick={() => signUpEmail(supabase, email, password)}
              type="button"
              value={!context ? "SIGN UP" : "SIGN IN"}
              style={theme?.btnStyle || {}}
            />
          </div>
          {!context ? (
            <p style={theme?.textStyle || {}}>Or sign up with</p>
          ) : (
            <p style={theme?.textStyle || {}}>Or sign in with</p>
          )}

          <div>
            {provider?.map((prov) => {
              return (
                <SocialConnect
                  key={prov}
                  supabase={supabase}
                  provider={prov}
                  catchPayload={catchPayload}
                />
              );
            })}
          </div>
          <p style={theme?.textStyle || {}}>
            {!context ? (
              <span>Already have an account </span>
            ) : (
              <span>Create an account </span>
            )}
            <a
              style={theme?.linkStyle || {}}
              onClick={() => setContext(!context)}
            >
              {!context ? "sign in" : "sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
