import init, { extract_text } from "rust-code/epub_parser/pkg";

export default async function parseEpub(file: File) {
  await init(); // Initializes the WASM module
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  const text = extract_text(uint8Array);
  console.log(text);
}
