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
        url={process.env.STORYBOOK_URL}
        apiKey={process.env.STORYBOOK_APIKEY}
        provider={["apple","bitbucket","discord","facebook","github","gitlab","google","keycloak","linkedin","microsoft","notion","slack","spotify","twitch","twitter","workos","zoom",
        ]}
        catchPayload={catchPayload}
        theme={{
          bgComponent :{
            "background-color": "#ffffff",
          },
          textStyle: {
            color: "#6b7280",
          },
          h1Style: {
            color: "#6366f1",
          },
          btnStyle: {
            "background-color": "#6366f1",
          },
          linkStyle: {
            color: "#6366f1",
          },
        }}
      />
    </div>
  );
});
