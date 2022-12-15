import Head from "next/head";
import Image from "next/image";
import Product from "../components/product";
import styles from "../styles/Home.module.css";
import Header, { StoreName } from "../components/header";
import Footer from "../components/footer";

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
        <Footer
          text="Created by Steve with ❤️ for 4DS3-Final Project"
          secondText="© 2022 McMaster University"
        />
    </div>
  );
}
