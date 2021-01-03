import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'
const HomePage = () => {
  return (
    <BlogLayout>
      <h1>HomePage of Flowmaster</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `


      </p>
<BlogPostCell />
    </BlogLayout>
  )
}

export default HomePage
