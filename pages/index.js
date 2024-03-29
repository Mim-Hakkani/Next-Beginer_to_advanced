import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
   {/* routing setup with navigation menu  */}

   <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link href='/post'>Posts</Link>
          </li>

          <li>
            <Link href='/clints'>Clints</Link>
          </li>
      </ul>



      <main >
        <h1 className={styles.title}>
          Welcome to Ehsan Marketing 
        </h1>





      </main>

   
    </div>
  )
}
