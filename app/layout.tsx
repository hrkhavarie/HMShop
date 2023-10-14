// import './globals.css'

//styles 
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/scss/style.scss'
import './styles/css/vendor/ecicons.min.css'

// import './styles/css/plugins/swiper-bundle.min.css'

import Script from 'next/Script'
import type { Metadata } from 'next'
import {Poppins , Inter , Fjalla_One } from 'next/font/google'
import Header from './components/ui/header/Header'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] , weight:['400' ,'500', '600' , '700' , '800']} )
const fjalla = Fjalla_One({ subsets: ['latin'] , weight:['400']} )

export const metadata: Metadata = {
  title: 'HM shop App',
  deScription: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 
  return (
    <html lang="en">
      <body className=''>
        <Header/>
        {children}
        
        {/* <!-- Vendor JS --> */}
    <Script src="/assets/js/vendor/jquery-3.5.1.min.js"></Script>
    <Script src="/assets/js/vendor/popper.min.js"></Script>
    <Script src="/assets/js/vendor/bootstrap.min.js"></Script>
    <Script src="/assets/js/vendor/jquery-migrate-3.3.0.min.js"></Script>
    <Script src="/assets/js/vendor/modernizr-3.11.2.min.js"></Script>

    {/* <!--Plugins JS--> */}
    <Script src="/assets/js/plugins/swiper-bundle.min.js"></Script>
    <Script src="/assets/js/plugins/countdownTimer.min.js"></Script>
    <Script src="/assets/js/plugins/scrollup.js"></Script>
    <Script src="/assets/js/plugins/jquery.zoom.min.js"></Script>
    <Script src="/assets/js/plugins/slick.min.js"></Script>
    <Script src="/assets/js/plugins/infiniteslidev2.js"></Script>
    <Script src="/assets/js/vendor/jquery.magnific-popup.min.js"></Script>
    <Script src="/assets/js/plugins/jquery.sticky-sidebar.js"></Script>

    {/* <!-- Google translate Js --> */}
    <Script src="/assets/js/vendor/google-translate.js"></Script>
    <Script>
        {/* function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        } */}
    </Script>
    {/* <!-- Main Js --> */}
    <Script src="/assets/js/vendor/index.js"></Script>
    <Script src="/assets/js/main.js"></Script>

        </body>
    </html>
  )
}
