import otpGenerator from "otp-generator";
export const otp = () => otpGenerator.generate(6, {
  lowerCaseAlphabets: false,
  upperCaseAlphabets: false,
  specialChars: false,
});
