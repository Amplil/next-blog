import Link from "next/link";
import { client } from "../lib/client";
import Layout from "../components/layout" 
import Seo from "../components/seo"
import Sidebar from '../components/sidebar'

export default function Home({blog}) {
  return (
    <Layout>
      <Seo title="アイデア！テック" description="ちょっとしたアイデアから始まるテクノロジ" /> 
      <div className="bg-[#f5f6f6] pl-20 pr-20 pt-10 pb-28 flex justify-center">
        <div className="lg:w-2/3 pl-8 pr-8 md:w-auto">
          {blog.map((blog, index) => {
            return(
              <Link key={index} href={`/blog/${blog.id}`}>
                <div className="pt-10">
                  <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <p className="text-[14px] text-[#0000009a]">{blog.publishedAt}</p>
                      <div className="font-bold text-xl mb-2 hover:underline">{blog.title}</div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {blog.category && `${blog.category.name}`}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          )}
        </div>
        <div className="hidden w-64 pl-5 pr-5 lg:block">
          <Sidebar />
        </div>
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