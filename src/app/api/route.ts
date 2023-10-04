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
    // console.log("The Data is ====> ", await request.json());
    const newVal = await request.arrayBuffer();
    return NextResponse.json(newVal);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:24 ~ POST ~ error:", error);
    return NextResponse.json(error, { status: 400 });
  }
}
