import Link from 'next/link'
import Styles from './breadCrumbs.module.scss'

export default function BreadCrumbs () {
  return (
    <span className={Styles.container}>
      <Link className={Styles.link} href='./'>Inicio | </Link>
      </span>
  )
}
