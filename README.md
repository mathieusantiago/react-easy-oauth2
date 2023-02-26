# React Easy oAuth2

[![npm version](https://badge.fury.io/js/test-react-lib-mathieusantiago.svg)](https://badge.fury.io/js/test-react-lib-mathieusantiago)
[![Downloads](https://img.shields.io/npm/dm/test-react-lib-mathieusantiago.svg)](https://www.npmjs.org/package/test-react-lib-mathieusantiago)

A simple React component to manage your authentication with social networks

This npm package simplifies authentication with Supabase Auth2, making it easier to connect with popular social media platforms such as Google, GitHub, Facebook, Twitter, and more.easy

Installation
============== 

    $ npm install supabase-easy-oauth2 @supabase/supabase-js

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
