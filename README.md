# React Easy oAuth2
[![npm](https://img.shields.io/npm/v/react-easy-oauth2)](https://www.npmjs.com/package/react-easy-oauth2)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
[![npm](https://img.shields.io/npm/dm/react-easy-oauth2)](https://badge.fury.io/js/react-easy-oauth2)
[![GitHub repo size](https://img.shields.io/github/repo-size/mathieusantiago/react-easy-oauth2)](https://github.com/mathieusantiago/react-easy-oauth2)
![NPM](https://img.shields.io/npm/l/react-easy-oauth2)


A simple React component to manage your authentication with social networks

This npm package simplifies authentication with Supabase Auth2, making it easier to connect with popular social media platforms such as Google, GitHub, Facebook, Twitter, and more easy

![Capture d’écran 2023-02-26 204901](https://user-images.githubusercontent.com/62888392/221435138-ba97798c-f4db-4599-a424-dd666ec2ff7c.png)

# SupaBase

this package works with SupaBase ensuring you have an account with a URL and a public api key

Create free account on Supabase https://supabase.com/

Create new project you have 2 free project with a free account

Retrieve your api and URL keys in your project settings on SupaBase

![Capture d’écran 2023-02-26 214646](https://user-images.githubusercontent.com/62888392/221436287-449af22c-562f-47f1-b820-5501898729d8.png)

Installation
==============

    $ npm install react-easy-oauth2
    OR
    $ yarn add react-easy-oauth2

# Examples

Here is an example of how to use the React Easy oAuth2 component

first import the react-easy-oauth2 component

```javascript
import { FormConnect } from "react-easy-oauth2";
```

secondly, create a function that will retrieve any errors and data returned by supabase
use the imported FormConnect component by passing it the correct props

```javascript
const catchPayload = (payload) => {
  console.log("catchPayload", payload);
};
```

Thirdly, use the imported FormConnect component by passing it the correct props.


```javascript
  <div>
    <FormConnect
      url={"<your SupaBase URL>"}
      apiKey={"<Your SupaBase public api key>"}
      provider={<[Array of provider]>}
      catchPayload={catchPayload}
    />
  </div>
```

list of supported providers

```
['apple','bitbucket', 'discord', 'facebook', 'github', 'gitlab', 'google', 'keycloak', 'linkedin', 'microsoft', 'notion', 'slack', 'spotify', 'twitch', 'twitter', 'workos', 'zoom']
```

To activate the providers you will have to go to Supabase in your project section authentprovider and activate the desired provider by inserting the key of the provider in question

![Capture d’écran 2023-02-26 221531](https://user-images.githubusercontent.com/62888392/221437773-55841685-5703-460a-bc10-ed7039706db1.png)

# Create your style

If you wish, it is possible to change the theme of the component by adding CSS attributes in a theme property which is an object that takes several elements

Add to the component ```  <FormConnect/> ```  the theme property as in the example below and apply your own color theme to the component

```javascript
  theme={{
    bgComponent :{
      "background-color": "blue",
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
```
# Selecte your logo

If you wish, it is possible to change the logo of the component

Add to the component ```  <FormConnect/> ```  the logo property as in the example below and apply your own logo to the component

```javascript
    logo={'https://cdn-icons-png.flaticon.com/512/3387/3387987.png'}
```
# Selecte your langage

If you wish, it is possible to change the langage of the component by adding String('Fr') attributes in a lang property 

| code | language |
|:----:| :----:   |
| Fr   | French   |
| Ar   | Arabic   |
| De   | German   |
| En   | English  |
| Es   | Spanish  |
| It   | Italy    |
| Ja   | Japanese |
| Pt   | Poland   |
| Ru   | Russian  |
| Zh   | Chinese  |

Add to the component ```  <FormConnect/> ```  the lang property as in the example below and apply your own langage to the component

```javascript
    lang={'Fr'}
```
# Selecte your Field

If you wish, it is possible to change the Field of the component by adding array of Field in a Field property 

Add to the component ```  <FormConnect/> ```  the Field property as in the example below and apply your own Field to the component

```javascript
    field={['fname','lname', 'email', 'passwd', 'add1', 'add2', 'phone', 'city', 'zip']}
```
# Complete exemple
Here is an example of a complete component with all properties and parameters

```javascript
() => {
  const catchPayload = (payload) => {
    console.log("catchPayload", payload);
  };

  return (
    <div>
      <FormConnect
        url={process.env.STORYBOOK_URL}
        apiKey={process.env.STORYBOOK_APIKEY}
        catchPayload={catchPayload}
        useDefault="signUp"
        lang={'Fr'}
        field={['fname','lname', 'email', 'passwd', 'add1', 'add2', 'phone', 'city', 'zip']}
        provider={["github","gitlab","google","keycloak","linkedin","microsoft","notion","slack","spotify","twitch","twitter","workos","zoom",
        ]}
        logo={'https://cdn-icons-png.flaticon.com/512/3387/3387987.png'}
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
      />
    </div>
  );
}
```
# list of propertys


| property    | type        |default|required/optional|description |
| :---        |    :----:   | :----:|      :----:     |    :---    |
| url         | String      || required        |The URL of your Supabase project|
| apiKey      | String      || required        |The API key for your Supabase project|
| catchPayload| Function    || required        |A function that receives data or error|
| provider    | Array       |empty| optional        |The provider for user sign-up.["apple","bitbucket","discord","facebook","github","gitlab","google","keycloak","linkedin","microsoft","notion","slack","spotify","twitch","twitter","workos","zoom",]|
| theme       | Object      |default theme| optional        |An object that contains the styling for the sign-up form|
| field       | Array       |empty| optional        |An array of objects that describe the input fields to render in the sign-up form.['fname','lname', 'email', 'passwd', 'add1', 'add2', 'phone', 'city', 'zip']|
| logo        | String      |empty| optional        |The path to the logo image to display in the sign-up form|
| useDefault  | String      |signin| optional        |A string that determines whether to show the signup/signin form by default.|
| lang        | String      |En| optional        |The language to use for localization of the sign-up form. Fr/Ar/De/En/Es/It/Ja/Pt/Ru/Zh|


# Thank you

I hope this was useful and if you have any question or need help, you can open an issue on GitHub
and the discord where I am very active

GitHub: https://github.com/mathieusantiago/supabase-easy-oauth2/tree/master

Discord: https://discord.gg/9EMDFGEs
