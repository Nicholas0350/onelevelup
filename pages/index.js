import Header from '../components/Header'
import matter from 'gray-matter';
import BlogPost from '../components/Blog/BlogPost';

export default function Home(props) {
  const realData = props.data.map(blog => matter(blog))
  const listItems = realData.map(listItem => listItem.data)
  return (
    <section id="index-page">
      <Header />
      <h1 id="blog-header">
        Nicholas Blog
      </h1>
      <div className="container">
        <div className="blogsContainer">


          {listItems.map((blog, i) => (
            <BlogPost key={i} blog={blog} />
          ))}


          {/* {listItems.map((blog, i) => (
          <BlogPost key={i} blog={blog} />
          ))} */}



        </div>
      </div>
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