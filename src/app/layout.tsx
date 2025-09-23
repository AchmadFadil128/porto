import Navigation from '@/components/Navigation';
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-blue-50">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <footer className="bg-blue-100 py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-blue-800">
              <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}