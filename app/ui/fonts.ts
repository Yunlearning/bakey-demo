import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const hylia = localFont({
  src: './fonts/hylia-serif/HyliaSerifBeta-Regular.otf',
  display: 'swap',
});
