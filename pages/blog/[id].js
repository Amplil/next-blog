import { client } from "../../lib/client";
//import styles from '../../styles/Home.module.css';
import Layout from "../../components/layout"
import * as style from "../../styles/singleBlog.module.scss"
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

export default function BlogId({ blog }) {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <p className="text-[14px] text-[#0000009a]">投稿日 {blog.publishedAt}</p>
          <h1 className="mt-[8px] text-[33px] font-bold mb-5">{blog.title}</h1>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
          <div className="markdown">
            <ReactMarkdown
              rehypePlugins={[rehypeKatex]}
              remarkPlugins={[remarkMath]}>
              {blog.body}
            </ReactMarkdown>
          </div>
          </div>
      </div>
    </Layout>
);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};