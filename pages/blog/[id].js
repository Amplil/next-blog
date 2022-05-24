import { client } from "../../lib/client"
//import styles from '../../styles/Home.module.css';
import Layout from "../../components/layout"
import * as style from "../../styles/singleBlog.module.scss"
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
//import { Tag } from 'react-feather';
import TableOfContents from '../../components/table-of-contents'
//import ReactMarkdownHeading from 'react-markdown-heading'
//import ScrollSyncToc from '../../lib/scroll-sync-toc'

export default function BlogId({ blog }) {
  const H1 = ({ node, ...props }) => {
    return (
      <h1 id={node.position?.start.line.toString()}>{props.children}</h1>
    );
  };
  const H2 = ({ node, ...props }) => {
    return (
      <h2 id={node.position?.start.line.toString()}>{props.children}</h2>
    );
  };
  const H3 = ({ node, ...props }) => {
      return (
        <h3 id={node.position?.start.line.toString()}>{props.children}</h3>
      );
    };
    const H4 = ({ node, ...props }) => {
        return (
          <h4 id={node.position?.start.line.toString()}>{props.children}</h4>
        );
      };
      const H5 = ({ node, ...props }) => {
          return (
            <h5 id={node.position?.start.line.toString()}>{props.children}</h5>
          );
        };
        const H6 = ({ node, ...props }) => {
            return (
              <h6 id={node.position?.start.line.toString()}>{props.children}</h6>
            );
                      };
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <p className="text-[14px] text-[#0000009a]">投稿日 {blog.publishedAt}</p>
          <h1 className="mt-[8px] text-[33px] font-bold mb-5">{blog.title}</h1>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {blog.category && `${blog.category.name}`}</span>
          <div className="markdown">
            <ReactMarkdown
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkMath]}
            components={{
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,}}>
                {blog.body}
            </ReactMarkdown>
          </div>
        </div>
        <div class="w-64">
          <TableOfContents body={blog.body}/>
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