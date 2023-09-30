"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Shadcn button </p>
      <Button
        variant={"secondary"}
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click me
      </Button>
    </main>
  );
}
