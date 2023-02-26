# React Easy oAuth2

[![npm version](https://badge.fury.io/js/react-easy-oauth2.svg)](https://badge.fury.io/js/react-easy-oauth2)
[![Downloads](https://img.shields.io/npm/dm/react-easy-oauth2.svg)](https://www.npmjs.org/package/react-easy-oauth2)

A simple React component to manage your authentication with social networks

This npm package simplifies authentication with Supabase Auth2, making it easier to connect with popular social media platforms such as Google, GitHub, Facebook, Twitter, and more.easy

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

Examples
==========

Here is an example of how to use the React Easy oAuth2 component 

first import the react-easy-oauth2 component 

```javascript
import { FormConnect } from 'react-easy-oauth2';
```

secondly, create a function that will retrieve any errors and data returned by supabase
use the imported FormConnect component by passing it the correct props

```javascript
 const catchPayload = (payload)=>{ 
    console.log('catchPayload', payload);
  }
```

Thirdly, use the imported FormConnect component by passing it the correct props.

list of supported providers

```
['apple','bitbucket', 'discord', 'facebook', 'github', 'gitlab', 'google', 'keycloak', 'linkedin', 'microsoft', 'notion', 'slack', 'spotify', 'twitch', 'twitter', 'workos', 'zoom']
```

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

To activate the providers you will have to go to Supabase in your project section authentprovider and activate the desired provider by inserting the key of the provider in question 

![Capture d’écran 2023-02-26 221531](https://user-images.githubusercontent.com/62888392/221437773-55841685-5703-460a-bc10-ed7039706db1.png)

# Thank you

I hope this was useful and if you have any question or need help, you can open an issue on GitHub
and the discord where I am very active 
GitHub: https://github.com/mathieusantiago/supabase-easy-oauth2/tree/master
Discord: https://discord.gg/9EMDFGEs
