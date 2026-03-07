import "./globals.css";

export const metadata = {
  title: "woolyspace",
  description: "Michelle's portfolio migrated to Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
