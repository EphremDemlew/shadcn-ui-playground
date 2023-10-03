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

export async function POST(request: NextRequest) {
  // console.log("🚀 ~ file: route.ts:19 ~ POST ~ request:", request);
  // const res = await request.json(); // res now contains body
  console.log("Request Body:", await request.json);

  return NextResponse.json({ res: "Something" });
}
