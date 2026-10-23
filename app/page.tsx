import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

// The page markup lives in lib/body.html; interactions live in public/portfolio.js.
const html = fs.readFileSync(path.join(process.cwd(), "lib", "body.html"), "utf8");

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/portfolio.js" strategy="afterInteractive" />
    </>
  );
}
