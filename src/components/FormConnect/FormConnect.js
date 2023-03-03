import React, { useEffect, useState } from "react";
import { SocialConnect } from "./SocialConnect/SocialConnect";
import { createClient } from "@supabase/supabase-js";
import "../../styles.css";
import local_Fr from "../local/lang.fr.json";
import local_En from "../local/lang.en.json";
import local_Es from "../local/lang.es.json";
import local_It from "../local/lang.it.json";
import local_Pt from "../local/lang.pt.json";
import local_De from "../local/lang.de.json";
import local_Zh from "../local/lang.zh.json";
import local_Ja from "../local/lang.ja.json";
import local_Ru from "../local/lang.ru.json";
import local_Ar from "../local/lang.ar.json";

/**
 * Component that sets up the Supabase environment, manages user sign up, and renders a sign-up form.
 * @param {string} url - The URL of your Supabase project.
 * @param {string} apiKey - The API key for your Supabase project.
 * @param {string} provider - The provider for user sign-up.["apple","bitbucket","discord","facebook","github","gitlab","google","keycloak","linkedin","microsoft","notion","slack","spotify","twitch","twitter","workos","zoom",]
 * @param {function} catchPayload - A function that receives data or error from the `signUpEmail` method.
 * @param {object} theme - An object that contains the styling for the sign-up form.
 * @param {array} field - An array of objects that describe the input fields to render in the sign-up form.['fname','lname', 'email', 'passwd', 'add1', 'add2', 'phone', 'city', 'zip']
 * @param {string} logo - The path to the logo image to display in the sign-up form.
 * @param {string} useDefault - A string that determines whether to show the signup/signin form by default.
 * @param {string} lang - The language to use for localization of the sign-up form. Fr/En
 * @throws {Error} If `url` or `apiKey` is not a non-empty string.
 * @returns {JSX.Element} A JSX element that contains the sign-up form.
 */

export const FormConnect = ({
  url,
  apiKey,
  provider,
  catchPayload,
  theme,
  field,
  logo,
  useDefault = "signIn",
  lang,
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
  const [context, setContext] = useState(
    useDefault === "signUp" ? false : true
  );
  const arrayLang = [
    "Fr",
    "fr",
    "En",
    "en",
    "Es",
    "es",
    "It",
    "it",
    "Pt",
    "pt",
    "De",
    "de",
    "Ja",
    "ja",
    "Ru",
    "ru",
    "Ar",
    "ar",
    "Zh",
    "zh",
  ];
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

  let local_lang = {};
  let default_lang = "En";

  const selectLocal = (lang) => {
    if (!lang || !arrayLang.some((startsWith) => lang.startsWith(startsWith))) {
      return (local_lang = local_En);
    }
    if (lang?.startsWith("Fr")) {
      return (local_lang = local_Fr);
    }

    if (lang?.startsWith("En")) {
      return (local_lang = local_En);
    }

    if (lang?.startsWith("Es")) {
      return (local_lang = local_Es);
    }

    if (lang?.startsWith("It")) {
      return (local_lang = local_It);
    }

    if (lang?.startsWith("Pt")) {
      return (local_lang = local_Pt);
    }

    if (lang?.startsWith("De")) {
      return (local_lang = local_De);
    }

    if (lang?.startsWith("Ja")) {
      return (local_lang = local_Ja);
    }

    if (lang?.startsWith("Ru")) {
      return (local_lang = local_Ru);
    }

    if (lang?.startsWith("Ar")) {
      return (local_lang = local_Ar);
    }

    if (lang?.startsWith("Zh")) {
      return (local_lang = local_Zh);
    }
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
                <h1 style={theme?.h1Style || {}}>
                  {selectLocal(lang).signup.header.title}
                </h1>
                <p style={theme?.textStyle || {}}>
                  {selectLocal(lang).signup.header.description}
                </p>
              </>
            ) : (
              <>
                <h1 style={theme?.h1Style || {}}>
                  {selectLocal(lang).signin.header.title}
                </h1>
                <p style={theme?.textStyle || {}}>
                  {selectLocal(lang).signin.header.description}
                </p>
              </>
            )}
          </div>
          <div className="content">
            {field?.includes("fname") && !context ? (
              <div className="input m-1">
                <input
                  type="text"
                  placeholder={selectLocal(lang).signup.form.first_name}
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
                  placeholder={selectLocal(lang).signup.form.last_name}
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
                  placeholder={selectLocal(lang).signin.form.email}
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
                  placeholder={selectLocal(lang).signin.form.password}
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
                  placeholder={selectLocal(lang).signup.form.address}
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
                  placeholder={selectLocal(lang).signup.form.address2}
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
                  placeholder={selectLocal(lang).signup.form.phone}
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
                    placeholder={selectLocal(lang).signup.form.city}
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
                    placeholder={selectLocal(lang).signup.form.zip}
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
              value={
                !context
                  ? selectLocal(lang).signup.form.btn
                  : selectLocal(lang).signin.form.btn
              }
              style={theme?.btnStyle || {}}
            />
          </div>
          {!context ? (
            <p style={theme?.textStyle || {}}>
              {selectLocal(lang).signup.body.content}
            </p>
          ) : (
            <p style={theme?.textStyle || {}}>
              {selectLocal(lang).signin.body.content}
            </p>
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
              <span>{selectLocal(lang).signup.footer.content} </span>
            ) : (
              <span>{selectLocal(lang).signin.footer.content} </span>
            )}
            <a
              style={theme?.linkStyle || {}}
              onClick={() => setContext(!context)}
            >
              {!context
                ? selectLocal(lang).signup.footer.link
                : selectLocal(lang).signin.footer.link}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
