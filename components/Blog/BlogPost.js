// rsf
import React from 'react';
import Link from 'next/link'

function BlogPost({ blog }) {
  return (
    <div className="BlogPost">
      <div>
        <img src="blog.img" />
        <div className="date">{blog.data}</div>
        <Link href={`/posts/${blog.slug}`}>
          <a className="blogTitle">{blog.title}</a>
        </Link>
        <p>{blog.description}</p>

      </div>
    </div>
  );
}

export default BlogPost;
