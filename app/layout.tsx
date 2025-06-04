// app/layout.tsx
import '.app/globals.css';
import React from 'react';

export const metadata = {
  title: 'AI Chat - OpenRouter',
  description: 'AI Chat seperti ChatGPT pakai OpenRouter API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
