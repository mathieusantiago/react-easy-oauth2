import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { FormConnect } from "../components/FormConnect";


const stories = storiesOf("supaBase-oAuth2", module);

stories.add("FormConnect", () => {
  const catchPayload = (payload) => {
    console.log("catchPayload", payload);
  };

  return (
    <div>
      <FormConnect
        logo={'https://cdn-icons-png.flaticon.com/512/3387/3387987.png'}
        url={process.env.STORYBOOK_URL}
        apiKey={process.env.STORYBOOK_APIKEY}
        catchPayload={catchPayload}
        useDefault="signIn"
        field={['fname','lname', 'email', 'passwd', 'add1', 'add2', 'phone', 'city', 'zip']}
        provider={["apple","bitbucket","discord","facebook","github","gitlab","google","keycloak","linkedin","microsoft","notion","slack","spotify","twitch","twitter","workos","zoom",
        ]}
        theme={{
          bgComponent :{
            backgroundColor: "#ffffff",
          },
          textStyle: {
            color: "#6b7280",
          },
          h1Style: {
            color: "red",
          },
          btnStyle: {
            backgroundColor: "red",
          },
          linkStyle: {
            color: "red",
          },
        }}
        lang={'En'}
      />
    </div>
  );
});
