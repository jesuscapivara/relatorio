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
          <h3 className="title-container">Sign In</h3>
          <p className="subtitle-container">
            Use your email and password to sign in :)
          </p>
        </div>
        <Form type="login" />
      </div>
    </div>
  );
}
