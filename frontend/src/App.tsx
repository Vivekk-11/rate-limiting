import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  return (
    <>
      <input placeholder="OTP" />
      <input placeholder="new password" />
      <Turnstile
        onSuccess={(token) => {
          setToken(token);
        }}
        siteKey="0x4AAAAAAA0JZOzzv9dnaR9D"
      />
      <button
        onClick={() => {
          axios.post("http://localhost:3000/reset-password", {
            email: "harkirat@gmail.com",
            otp: "123456",
            token,
          });
        }}
      >
        Update Password
      </button>
    </>
  );
}

export default App;
