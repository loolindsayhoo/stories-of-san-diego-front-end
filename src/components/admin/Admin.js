import React from "react";
import "../../css/admin.css";

export function Admin(props) {
  return (
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
        <label for="tab-1" class="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" class="sign-up" />
        <label for="tab-2" class="tab">
          Sign Up
        </label>
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
              <label for="user" class="label">
                Username
              </label>
              <input id="user" type="text" class="input" />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Email Address
              </label>
              <input id="pass" type="text" class="input" />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
              />
            </div>
            <div class="group">
              <input type="submit" class="button" value="Sign In" />
            </div>
            <div class="hr"></div>
          </div>
          <div class="sign-up-htm">
          <div class="hr"></div>
            <h3>Please Get In Contact With Admin To Secure Your Credentials</h3>
            <div class="hr"></div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
