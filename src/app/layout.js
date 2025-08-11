import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EduWave - Modern Learning Platform',
  description: 'Transform your learnings experience with EduWave',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="min-h-screen">
          {children}
          <script src="https://blendstake.vercel.app/embed.js" data-agent-id="W6ng2dR4gV01GyiZoaQK"></script>
        </main>
      </body>
    </html>
  );
}
