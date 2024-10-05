export default function (src) {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://yangjun1453.github.io/Blogg/"
      : new URL(import.meta.url).origin;
  return new URL(src, BASE_URL).href;
}
