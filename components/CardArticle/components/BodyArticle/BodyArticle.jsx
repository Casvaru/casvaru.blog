import Styles from './BodyArticle.module.scss'

export default function BodyArticle () {
  return (
    <div>
      <h2 className={Styles.title}>Titulo</h2>
      <p className={Styles.bodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque quos eos ratione blanditiis! Neque est facere voluptate qui sed, nulla dignissimos, eum tempore, nostrum quidem odit modi. Dignissimos, voluptatum?</p>
    </div>
  )
}
