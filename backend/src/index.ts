import express from "express";

const app = express();

app.use(express.json());

const otpStore: Record<string, string> = {};

//@ts-ignore
app.post("/generate-otp", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required!" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  console.log(`OTP for ${email} is ${otp}`);
  res.status(200).json({ message: "OTP generated and logged" });
});

app.post("/reset-password", (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    res
      .status(400)
      .json({ message: "Email, OTP, and new password are required!" });
  }

  if (otpStore[email] === otp) {
    console.log(`Password for ${email} is ${newPassword}`);
    delete otpStore[email];
    res.status(200).json({ message: "Password has been reset successfully" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(3000, () => {
  console.log("Server running on PORT: 3000");
});
