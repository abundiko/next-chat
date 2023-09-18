"use client";

import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import testServer from "@/server/test";

export default function Home() {
  console.log("running on client");

  function clicked() {
    testServer();
  }
  return (
    <main>
      <SignupForm />
    </main>
  );
}
