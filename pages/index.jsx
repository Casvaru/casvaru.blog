import cardStyles from '../components/CardArticle/CardArticle.module.scss'
import imgStyles from '../components/CardArticle/components/ImageArticle/ImageArticle.module.scss'
import bodyStyles from '../components/CardArticle/components/BodyArticle/BodyArticle.module.scss'
import dateStyles from '../components/CardArticle/components/DateCard/DateArticle.module.scss'
import arrowStyles from '../components/CardArticle/components/ArrowHover/ArrowHover.module.scss'
import articleStyles from './articulo/article.module.scss'

import Arrow from '../components/CardArticle/components/ArrowHover/ArrowHover'

import Image from 'next/image'
import Link from 'next/link'

export default function Home ({ data }) {
  return (
    <div className={cardStyles.article}>
      {
        data.map((article) => (
          <Link className={cardStyles.link} href={`/articulo/${article.id}`} key={article.id} rel='noreferrer'>
            <article className={cardStyles.main}>
              <div className={imgStyles.container}>
                <Image className={imgStyles.image} src={article.mainImg} alt='Imagen alt' width={300} height={200} />
              </div>
              <div className={bodyStyles.container}>
                <h2 className={bodyStyles.title}> {article.title}</h2>
                <p className={bodyStyles.bodyText}>{article.description}</p>
                <div className={dateStyles.container}>
                  <time className={dateStyles.date} dateTime={article.dateTime}>{article.dateTime}</time>
                  <p className={articleStyles.timeRead}>{article.timeRead} minutos de lectura</p>
                </div>
              </div>
              <div className={arrowStyles.container}>
                <p className={arrowStyles.text}>Ver más</p>
                <Image className={arrowStyles.svg} src={Arrow} alt='Arrow svg' />
              </div>
            </article>
          </Link>
        ))
      }
    </div>
  )
}
export async function getStaticProps () {
  try {
    const res = await fetch('https://blog---casvaru-default-rtdb.firebaseio.com/.json')
    const data = await res.json()

    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.error(error)
  }
}
