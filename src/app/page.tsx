"use client";

import { Button } from "@/components/ui/button";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useCallback, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log("🚀 ~ file: page.tsx:17 ~ .then ~ dataUrl:", dataUrl);
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white rounded-lg shadow-xl">
      <div
        className="w-96 h-96 bg-gray-950 rounded flex flex-col text-white items-center justify-center"
        ref={ref}
      >
        <p className="text-xl font-semibold">Shadcn button</p>
        <p>Some desc here</p>
      </div>
      <Button variant={"default"} onClick={onButtonClick}>
        Click me
      </Button>
    </main>
  );
}
