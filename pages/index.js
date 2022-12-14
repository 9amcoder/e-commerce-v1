import Head from "next/head";
import Image from "next/image";
import Product from "../components/product";
import styles from "../styles/Home.module.css";
import Header, { StoreName } from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{StoreName}</title>
        <meta name="final Project" content="Steve Sultan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* <main className={styles.main}>
        <div className={styles.grid}> */}
      <Product />
      {/* </div>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
