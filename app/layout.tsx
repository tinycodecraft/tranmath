import { Header } from '../components/header'
import '../styles/globals.css'
import { Lora } from 'next/font/google'
import { Footer } from '../components/footer'
import classNames from 'classnames'
import NewHeader from '../components/newheader'
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
    <html lang='en' className={classNames("min-h-screen" ,lora.variable)}>
      <head />
      <body className="min-h-screen">
        <NewHeader />        
        {children}
        <Footer />
      </body>
    </html>
  )
}
