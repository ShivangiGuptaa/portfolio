import type { Metadata } from 'next';
import { Space_Grotesk, Outfit } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'Shivangi Gupta | Portfolio',
  description: 'Full Stack Developer & AI Enthusiast',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body className={[outfit.className, spaceGrotesk.variable, 'bg-background text-foreground antialiased selection:bg-purple-500/30 cursor-none transition-colors duration-300 overflow-x-hidden'].join(' ')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
