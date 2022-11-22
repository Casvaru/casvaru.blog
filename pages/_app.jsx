import '../styles/globals.scss'
import 'styles/components.scss'
import Head from './HeadIndex'
import Header from './layout/header/Header'
import Footer from './layout/footer/footer'

import { Poppins } from '@next/font/google'
const poppins = Poppins({
  weight: '400',
  bold: '600',
  subsets: ['Poppins']
})

function MyApp ({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Head title='Casvaru | Inicio' description='Blog enfocado en diseño web, performance, tutoriales y tendencias en el área del diseño y la programación, bienvenido!!' keywords='Casvaru, Blog casvaru, Diseño web, Programación, Diseño UI, User Experience, UX, Layout web, Frontend, SEO, Optimización web, Javascript, HTML, CSS, React, Next js' />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
