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

Installation
============== 

    $ npm install react-easy-oauth2
    OR
    $ yarn add react-easy-oauth2

Examples
==========

## OAuth2.0

```javascript
import {configEnv, signUpEmail, signUpGitHub} from 'supabase-easy-oauth2';

// Create a single supabase client for interacting with your database
const supabase = configEnv('https://xyzcompany.supabase.co', 'public-anon-key');
// Define a function that signs up with email
const email = async ()=> {
    // Call the `signUpEmail` function with the Supabase client and email/password credentials.
    signUpEmail(supabase, '<email@gmail.com>', '<password>').then((res)=> {
        console.log(res);
    });
}

// Define a function that signs up with GitHub
const gitHub = async ()=> {
     // Call the `signUpGitHub` function with the Supabase client and the `github, facebook, google` provider.
    signUpGitHub(supabase, 'github').then((res)=> {
        console.log(res);
    })
}
```
