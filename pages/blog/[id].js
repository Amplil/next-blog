import { client } from "../../lib/client";
import styles from '../../styles/Home.module.css';
import Layout from "../../components/layout"
import * as style from "../../styles/singleBlog.module.scss"
import ReactMarkdown from 'react-markdown'

export default function BlogId({ blog }) {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
          <ReactMarkdown children={blog.body} />
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