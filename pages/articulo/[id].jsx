/* eslint-disable react/no-unescaped-entities */
import Head from '../HeadIndex'
import Link from 'next/link'
import Image from 'next/image'

import BreadStyles from 'pages/layout/breadCrumbs/breadCrumbs.module.scss'
import articleStyles from './article.module.scss'
import iconInstagram from '../../public/icons/social/instagram.svg'
import iconTiktok from '../../public/icons/social/tiktok.svg'
import iconShorts from '../../public/icons/social/shorts.svg'

export default function Article ({ data }) {
  return (
    <>
      <Head title={`Casvaru | ${data.title}`} description={data.description} keywords={data.keyWords} />
      <span className={BreadStyles.container}>
        <Link className={BreadStyles.link} href='./'>Inicio</Link>
        <span>|</span>
        {/* <Link className={BreadStyles.link} href='./'>{data.breadCrumb}|</Link> */}
        <Link className={BreadStyles.active} href={`${data.id}`}>{data.title}</Link>
      </span>
      <article className={articleStyles.container}>
        <h1 className={articleStyles.title}>{data.title}</h1>
        <div className={articleStyles.dateArticle}>
          <h2 className={articleStyles.author}>Autor: <strong>{data.author}</strong></h2>
          <time>Fecha del artículo: {data.date}</time>
          <p className={articleStyles.timeRead}>{data.timeRead} minutos de lectura</p>
        </div>
        <div
          className={articleStyles.body}
          dangerouslySetInnerHTML={{
            __html: data.body
          }}
        />
        <div className={articleStyles.containerLink}>
          <div>
            <h5 className={articleStyles.titlelinks}>Ver en formato vídeo</h5>
          </div>
          <div className={articleStyles.iconsLinks}>
            <Link className={articleStyles.link} target='_blank' href={data.urlTiktok} rel='noreferrer'>
              <Image className={articleStyles.svgLinks} src={iconTiktok} width={25} height={25} alt='icono de tiktok' />
            </Link>
            <Link className={articleStyles.link} target='_blank' href={data.urlReel} rel='noreferrer'>
              <Image className={articleStyles.svgLinks} src={iconInstagram} width={25} height={25} alt='icono de instagram' />
            </Link>
            <Link className={articleStyles.link} target='_blank' href={data.urlShorts} rel='noreferrer'>
              <Image className={articleStyles.svgLinks} src={iconShorts} width={25} height={25} alt='icono de youtube' />
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths () {
  try {
    const res = await fetch('https://blog---casvaru-default-rtdb.firebaseio.com/.json')
    const data = await res.json()

    const paths = data.map(({ id }) => (
      {
        params: { id: `${id}` }
      }
    ))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getStaticProps ({ params }) {
  try {
    const res = await fetch(`https://blog---casvaru-default-rtdb.firebaseio.com/${params.id}.json`)
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
