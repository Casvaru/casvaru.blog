import Article from './CardArticle.module.scss'
import ImageArticle from './components/ImageArticle/ImageArticle'
import BodyArticle from './components/BodyArticle/BodyArticle'
import DateArticle from './components/DateCard/DateArticle'
import ArrowHover from './components/ArrowHover/ArrowHover'
import Link from 'next/link'

export default function CardArticle (id) {
  return (
    <Link href={`../../pages/Articles/${id}`}>
      <article className={Article.main}>
        <div className={Article.imgCard}>
          <ImageArticle />
        </div>
        <div className={Article.bodyCard}>
          <BodyArticle />
          <DateArticle />
        </div>
        <div className={Article.arrow}>
          <ArrowHover />
        </div>
      </article>
    </Link>
  )
}
export async function getStaticProps ({ params }) {
  console.log(params)
  try {
    const res = await fetch('https://casvaru.github.io/articlesapi.github.io/articles.json')
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
