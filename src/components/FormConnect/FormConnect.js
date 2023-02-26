import "../../styles.css";
import React from "react";

export const FormConnect = () => {
  return (
    <div className="FormConnect">
      <div class="signup-form">
        <div class="container">
          <div class="header">
            <h1>Create an Account</h1>
            <p>Get started for free!</p>
          </div>
          <form>
            <div class="input">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input class="signup-btn" type="submit" value="SIGN UP" />
          </form>
          <p>Or sign up with</p>
          <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
          </div>
          <p>
            Already have an account <a href="#">sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};
