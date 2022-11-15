import Head from 'next/head'
import { Favicon } from '../public/favicon.ico'

export default function HeadLayout (props) {
  return (
    <Head>
      <meta charset='UTF-8' />
      <title>{props.title}</title>
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={props.description} />
      <meta name='keywords' content={props.keywords} />
      <link rel='icon' href={Favicon} />
    </Head>
  )
}
