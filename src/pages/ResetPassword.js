import { useStytch } from "@stytch/react";
import React, { useState, useCallback } from "react";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");

  const stytchClient = useStytch();

  const token = new URLSearchParams(window.location.search).get("token");

  const resetPassword = useCallback(() => {
    stytchClient.passwords.resetByEmail({
      token,
      password: newPassword,
      session_duration_minutes: 60,
    });
  }, [stytchClient, token, newPassword]);

  return (
    <div className="login">
      <h1>Reset Password</h1>
      <div className="container">
        <form>
          <label>New Password</label>
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          ></input>

          <input type="password" placeholder="Confirm new password"></input>

          <button onClick={resetPassword}>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
