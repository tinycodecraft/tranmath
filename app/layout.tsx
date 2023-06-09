import  Header  from '../components/header'
import '../styles/globals.css'
import { Lora } from 'next/font/google'
import { Footer } from '../components/footer'
import { clsxm } from '../context/clsxm'
import NewHeader from '../components/header'
import  SideBar  from '../components/sidebar'


// We use Next's new font loader here, definitely check it out ;)
// @see: https://beta.nextjs.org/docs/optimizing/fonts
const lora = Lora({
  weight: ['400', '500'],
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={clsxm("min-h-screen" ,lora.variable)}>
      <head />
      <body className="min-h-screen">
        <Header />        
        {children}
        <Footer />
      </body>
    </html>
  )
}
