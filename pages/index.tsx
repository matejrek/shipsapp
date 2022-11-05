import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ShipsList from '../components/shipsList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ships app</title>
        <meta name="description" content="Ships app - displaying ships from spacex api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="profile-title">Collections</h1>
      <ShipsList />
    </div>
  )
}
