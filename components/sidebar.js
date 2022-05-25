import Image from 'next/image'

const Sidebar = ({ children }) => {
  return (
    <>
        <div>
            <ins className="adsbygoogle"
                data-ad-client="ca-pub-2661815267943239"
                data-ad-slot="9624100506"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <ins className="adsbygoogle"
                data-ad-client="ca-pub-2661815267943239"
                data-ad-slot="9624100506"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
        <div className="fixed">
            <div>
                <a href="https://hb.afl.rakuten.co.jp/hsc/215065c8.7b0eff9b.21506482.ec2625de/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOiI1NyIsImJhbiI6IjE0NjY3OTgiLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" >
                    <Image 
                    width={300}
                    height={300} 
                    src="https://hbb.afl.rakuten.co.jp/hsb/215065c8.7b0eff9b.21506482.ec2625de/?me_id=1&me_adv_id=1466798&t=pict"
                    border="0" 
                    alt="" 
                    title="" />
                </a>
            </div>
            {children}
        </div>
    </>
  )
}

export default Sidebar