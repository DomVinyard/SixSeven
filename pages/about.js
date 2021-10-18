import Head from 'next/head';
import AppStoreIcons from '../components/AppStoreIcons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>6/7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            backgroundColor: '#fff',
            color: '#222',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
          }}
        >
          <div className="inner">
            <Link href="/">← Back</Link>
            <h2>Tell me more</h2>
            <p>
              6/7 is a community of responsible drinkers. We find six alcoholic
              drinks per week to be a good liberal limit. The app is really
              simple to use. Every week it counts your drinks down from six to
              zero. It resets on Thursday afternoons.
            </p>
            <div style={{ marginTop: 32 }}>
              <AppStoreIcons />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
