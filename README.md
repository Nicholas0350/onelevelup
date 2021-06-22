This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Problem
 
Want content generated through markdown files using Nextjs to serve react app. 

Create a new markdown file that contains content & imagesfor a  blog post from the creation of this markdown file.
A new blog post will be listed on the homepage of website and clicking on it will lead us to a page where we can read that specific blog post in full.

- Create a project find a way to read and parse markdown files, because Next.js does not provide a way out of the box. 

- Set up dynamic routing so that a unique URL is automatically generated for each new blog post. 
- create a single blog page component that renders out a blog from the data stored in a given markdown file. 
- Set dynamic URL’s to go to this page component, which is configured to extract the unique part of the dynamic URL, the query parameter, and use this information to render out a specific markdown file that corresponds to the blog-post that the user just clicked on.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
