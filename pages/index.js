import Image from 'next/image'
//import styles from '../styles/Home.module.css'
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
              <div className="pt-10">
                <Link key={index} href={`/blog/${blog.id}`}>
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <p className="text-[14px] text-[#0000009a]">{blog.publishedAt}</p>
                      <div className="font-bold text-xl mb-2 hover:underline">{blog.title}</div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {blog.category && `${blog.category.name}`}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          )}
        </main>
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