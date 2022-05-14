import Image from 'next/image'
//import Head from 'next/head'

const Footer = () => {
  return (
    <footer className="bg-gray-200 flex justify-center items-center grow">
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className="h-[1] ml-0.5">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
)
}

export default Footer