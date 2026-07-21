import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "assets", "profile", "DSC09079.JPG");
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    const fallbackPath = path.join(process.cwd(), "public", "assets", "profile", "mitha.jpg");
    try {
      const fallbackBuffer = fs.readFileSync(fallbackPath);
      return new NextResponse(fallbackBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {
      return new NextResponse("Not found", { status: 404 });
    }
  }
}
