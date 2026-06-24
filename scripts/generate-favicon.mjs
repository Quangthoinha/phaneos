import sharp from "sharp";
import fs from "fs";
import path from "path";

const svgBuffer = fs.readFileSync(path.resolve("app/icon.svg"));

const sizes = [
  { size: 180, out: "app/apple-icon.png" },
  { size: 32, out: "public/favicon-32x32.png" },
  { size: 16, out: "public/favicon-16x16.png" },
];

await Promise.all(
  sizes.map(({ size, out }) =>
    sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.resolve(out))
      .then(() => console.log(`Generated ${out}`))
  )
);
