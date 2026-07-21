import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  // Serve DSC09079.JPG from the workspace assets folder outside the portfolio directory
  const filePath = path.join(process.cwd(), "..", "assets", "profile-photo", "DSC09079.JPG");
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    // Fallback to the existing mitha.jpg in public folder
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
