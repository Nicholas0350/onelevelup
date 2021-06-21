
import Header from '../components/Header'

export default function Home() {
  return (

    <section id="index-page">
      <Header />
      <h1 id="blog-header">
        Nicholas Blog
      </h1>

    </section>

  )
}


export const getStaticProps = async () => {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')

  
  const blogs = files.filter(fn => fn.endsWith(".md"))

  const data = blogs.map(blog => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });
    return rawContent
  })

  return {
    props: {
      data
    }
  }
}