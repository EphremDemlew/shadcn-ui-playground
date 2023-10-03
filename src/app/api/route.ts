import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: Request) {
//   toPng(ref, { cacheBust: true })
//     .then((dataUrl) => {
//       console.log("🚀 ~ file: page.tsx:17 ~ .then ~ dataUrl:", dataUrl);
//       const link = document.createElement("a");
//       link.download = "my-image-name.png";
//       link.href = dataUrl;
//       link.click();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

export async function POST(request: Request) {
  try {
    const newVal = await request.json();

    return NextResponse.json({ ...newVal });
  } catch (error) {
    error;
    return NextResponse.json({ error: "Error" }, { status: 400 });
  }
}
