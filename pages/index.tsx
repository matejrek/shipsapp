import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ShipsList from '../components/shipsList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ships app</title>
        <meta name="description" content="Ships app - displaying ships from spacex api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ShipsList />
    </div>
  )
}
