import Navbar from "./Navbar"
export default function MyApp({ Component, pageProps }) {
    return (
    <div>
        <Navbar />
    <Component {...pageProps} />
    </div>)
  }