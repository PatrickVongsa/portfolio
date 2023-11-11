import Footer from '@/components/Footer.component'
import Header from '@/components/Header.component'
import '@/styles/globals.css'
import { Inter, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className={`flex min-h-screen flex-col items-center justify-between ${nunito.className}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
