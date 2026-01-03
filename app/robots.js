export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/wp-admin/",
          "/wp-login.php",
          "/wp-json/",
          "/?*",
        ],
      },
    ],
    sitemap: "https://embraguesla34.com/sitemap.xml",
  };
}
