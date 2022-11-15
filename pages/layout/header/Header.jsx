import Link from 'next/link'
import Image from 'next/image'
import Header from './Header.module.scss'
import Arrow from '../../../public/icons/svg/arrow.svg'
import Logo from '../../../public/logo.svg'

export default function NavBar () {
  return (
    <header className={Header.container}>
      <Link href='./' className={Header.logo}>
        <Image priority className={Header.logoSvg} src={Logo} alt='' width={50} height={50} />
      </Link>
      <nav>
        <ul className={Header.navigation}>
          <li><Link className={Header.link} href='http://casvaru.com'> <Image className={Header.arrow} src={Arrow} alt='Flecha a la izquierda' /> Ir al portafolio</Link></li>
        </ul>
      </nav>
    </header>
  )
}
