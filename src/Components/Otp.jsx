import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDk8ojExp5XNWVZqHHD22PF1qxflE8VWlI",
  authDomain: "otp-project-f9a49.firebaseapp.com",
  projectId: "otp-project-f9a49",
  storageBucket: "otp-project-f9a49.appspot.com",
  messagingSenderId: "248370583834",
  appId: "1:248370583834:web:247e84aca39c87dd32b4a3",
  measurementId: "G-T236Z4SC9N"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      setIsVerifying(true);
      setError(null);

      const appVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': () => {
          // reCAPTCHA solved
        }
      }, auth);

      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmationResult);
      setCountdown(60);
      setResendDisabled(true);
    } catch (error) {
      console.error('Error sending verification code:', error);
      setError(error.message);
      setIsVerifying(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      setIsVerifying(true);
      setError(null);

      await confirmationResult.confirm(verificationCode);
      // User signed in successfully
      console.log('User signed in successfully');
      // Perform actions after successful sign-in
    } catch (error) {
      console.error('Error verifying code:', error);
      setError(error.message);
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    try {
      setResendDisabled(true);
      // Implement logic to resend verification code
      // ...
      setCountdown(60);
    } catch (error) {
      console.error('Error resending code:', error);
      setError(error.message);
    } finally {
      setResendDisabled(false);
    }
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      <input type="tel" placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <input type="text" placeholder="Verification code" value={verificationCode} onChange={handleVerificationCodeChange} />
      <div>
        <button disabled={isVerifying} onClick={handleSignIn}>Send</button>
      </div>
      <div>
        <button disabled={isVerifying || !confirmationResult} onClick={handleVerifyCode}>Verify</button>
      </div>
      <div>
        <button disabled={resendDisabled || !confirmationResult} onClick={handleResendCode}>Resend({countdown})</button>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Otp;
