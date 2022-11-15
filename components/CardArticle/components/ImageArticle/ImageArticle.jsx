import Styles from './imageArticle.module.scss'
import Image from 'next/image'
import Imagen from '../../../../public/img/01.webP'

export default function ImageArticle () {
  return (
    <div className={Styles.container}>
      <Image className={Styles.image} src={Imagen} alt='imagen' />
    </div>
  )
}
