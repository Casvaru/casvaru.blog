import Styles from './ArrowHover.module.scss'
import Image from 'next/image'
import Arrow from '../../../../public/icons/svg/arrow.svg'

export default function ArrowHover () {
  return (
    <div className={Styles.container}>
      <p className={Styles.text}>Ver más</p>
      <Image className={Styles.svg} src={Arrow} alt='Arrow svg' />
    </div>
  )
}
