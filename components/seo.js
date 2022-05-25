import { useRouter } from 'next/router'
import Head from 'next/head'

const SEO = ({ title, description }) => {
    const router = useRouter()
    const baseUrl = "https://ideatech.blog/"
    const currentUrl = baseUrl + router.pathname
    const defaultImage = `${baseUrl}/images/ogp.jpg`
    return (
        <Head>
            <html lang="ja" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
            <meta charSet="utf-8" />

            <title>{title}</title>
            <meta name="description" content={description} key="description" />
            <meta name="image" content={defaultImage} key="image" />   
            <link rel="canonical" href={currentUrl} key="canonical" />

            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdescription" />
            <meta property="og:image" content={defaultImage} key="ogimage" />
            <meta property="og:url" content={currentUrl} key="ogurl" />
        
            <link rel="shortcut icon" href="/images/favicon.ico" /> 
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2661815267943239"
        crossOrigin="anonymous"></script>
        </Head>
    )
}

export default SEO