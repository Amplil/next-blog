import Link from 'next/link'
//import Image from 'next/image'
import * as style from "../styles/common.module.scss"
import Head from 'next/head'

const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <Head>
        <title>アイデア！テック</title>
        <meta name="description" content="IdeaTech by Next.js + microCMS" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2661815267943239"
        crossOrigin="anonymous"></script>
      </Head>

      <div className={style.container}>
        <div className={style.flexContainer}>
          <ul>
            <li><Link href="/"><a>アイデア！テック</a></Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header