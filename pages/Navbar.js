import Link from "next/link"
const Navbar = ()=>{
const style={
    verticalAlign: "middle",
overflow: "hidden",
textDecoration: "none",
color: "white",
backgroundColor: "black",
textAlign: "center",
cursor: "pointer",
display:"flex",
justifyContent:"space-between",
padding:"1rem"

}
    return(
        <div style={style}>
        <Link href="/About">
        About Page
        </Link>
        <Link href="/Contact">
        Contact Page
        </Link>
        </div>
    )
}
export default Navbar