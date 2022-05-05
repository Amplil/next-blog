import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as style from "../styles/blog.module.scss" 
import Link from "next/link";
import { client } from "../lib/client";
import Layout from "../components/layout" 


export default function Home({blog}) {
  return (
    <Layout>
      <div className={style.wrapper}>
        <main className={style.container}>
          {blog.map((blog, index) => {
            return(
              <Link href={`/blog/${blog.id}`}>
                <div key={index} className={style.blogCard}>
                  <div className={style.textContainer}>
                    <h3>{blog.title}</h3>
                  </div>
                </div>
              </Link>
            )}
          )}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};