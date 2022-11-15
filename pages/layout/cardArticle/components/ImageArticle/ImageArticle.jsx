import Styles from './imageArticle.module.scss'
import Image from 'next/image'

export default function ImageArticle () {
  return (
    <div className={Styles.image}>
      <Image src='' alt='imagen' />
    </div>
  )
}
