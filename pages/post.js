import axios from "axios"
const post=({query,comments})=>{

    return (
    <div>
    <h1>This is comments of #{query.id}</h1>
    <ul>
    {comments.map(cm=>(<li key={cm.id}><h3>{cm.name} - {cm.email}</h3>
    
    {cm.body}
    <hr />
    </li>))} 
    </ul>
    </div>
    )
}   

post.getInitialProps = async({query})=>{
const res =await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`)  
const {data} = res
return {query:query,comments:data}
}
export default post