import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="login-section">
        <div className="login-section">
        <div className="logo-container">
            <h1 className="origins-logo">ORIGINS</h1>
          </div>
          <h3 className="title-container">Register</h3>
          <p className="subtitle-container">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  );
}
