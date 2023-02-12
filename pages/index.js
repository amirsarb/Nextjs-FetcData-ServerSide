import axios from "axios"
import Link from "next/link"
const index = ({ posts })=>{

          return <ul><h1>Post Titles:</h1> {posts.map((p)=>(<li key={p.id}>
            <Link href={`/post/?id=${p.id}`}>
            {p.title}
            </Link>
            </li>))}</ul>
   
}
index.getInitialProps=async()=>{
   
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = res.data
    return { posts: posts }
}
export default index