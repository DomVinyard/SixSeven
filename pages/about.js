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
              6/7 is a community of limited drinkers. We find six drinks per
              week to be a good liberal limit. If you have a drinking problem
              then this is not the program for you. Seek professional support.
            </p>
            <p>
              The app is really simple to use. Every week it counts your drinks
              down from six to zero. It resets on Thursday afternoons.
            </p>
            <p>
              The app is intentionally quite expensive (£10), the financial
              commitment is designed to encourage people to stick with it.{' '}
              <strong>Most of the profits go to addiction charities.</strong>
            </p>
            <AppStoreIcons />
          </div>
        </div>
      </main>
    </div>
  );
}
