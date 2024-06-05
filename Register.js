import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./Register.css"; // Import the CSS file


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate password format before creating the user
    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      toast.error("Password must be at least 8 characters long, contain uppercase and lowercase letters, numbers, and special characters.", {
        position: "bottom-center",
      });
      return; // Prevent creating user if password is invalid
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.", {
        position: "bottom-center",
      });
      return; // Prevent creating user if passwords don't match
    }

    try {
      // Attempt user creation
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check for successful registration
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
        });
        console.log("User Registered Successfully!!");

        // Display success message after successful registration (using .then())
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
      } else {
        // Handle potential error (e.g., email already exists)
        toast.error("Email address already in use. Please try a different email.", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  // Function to validate password format
  const validatePassword = (password) => {
    const minLength = 8; // Minimum password length
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':",./<>?|\\ ]/.test(password);

    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  return (
    <div className="register-container"> 
      <form onSubmit={handleRegister} className="register-form">
        <h2>Join Us!</h2>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </div>
        <p className="already-have-acc">
          Already have an account. <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
