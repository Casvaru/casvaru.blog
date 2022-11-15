import Image from 'next/image'
import Link from 'next/link'

import Styles from './footer.module.scss'
import iconFacebook from '../../../public/icons/social/facebook.svg'
import iconInstagram from '../../../public/icons/social/instagram.svg'
import iconTiktok from '../../../public/icons/social/tiktok.svg'
import iconYoutube from '../../../public/icons/social/youtube.svg'

export default function Footer () {
  return (
    <footer className={Styles.container}>
      <div className={Styles.containerIcons}>
        <Link className={Styles.icons} href='https://www.facebook.com/casvaru' target='_blank' rel='noreferrer'>
          <Image src={iconFacebook} width={25} height={25} alt='icono de facebook' />
        </Link>
        <Link className={Styles.icons} href='https://www.instagram.com/casvaru/' target='_blank' rel='noreferrer'>
          <Image src={iconInstagram} width={25} height={25} alt='icono de instagram' />
        </Link>
        <Link className={Styles.icons} href='https://www.tiktok.com/@casvaru' target='_blank' rel='noreferrer'>
          <Image src={iconTiktok} width={25} height={25} alt='icono de tiktok' />
        </Link>
        <Link className={Styles.icons} href='https://www.tiktok.com/@casvaru' target='_blank' rel='noreferrer'>
          <Image src={iconYoutube} width={25} height={25} alt='icono de youtube' />
        </Link>
      </div>
    </footer>
  )
}
