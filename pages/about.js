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
          }}
        >
          <div className="inner">
            <Link href="/">← Back</Link>
            <p>
              6/7 is a community of limited drinkers. We find six to be a good
              weekly limit in places where social drinking is an imporant part
              of cultural life. If you have a drinking problem then this is not
              the program for you. Seek professional support.
            </p>
            <p>
              The app is really simple to use. It will start at six and count
              down with each drink until it hits zero. Every Thursday afternoon
              it will reset back to six.
            </p>
            <p>
              The app is intentionally quite expensive (£10), the financial
              commitment is designed to help you stick with it.{' '}
              <strong>Half the profits go to addiction charities.</strong>
            </p>
            <AppStoreIcons />
          </div>
        </div>
      </main>
    </div>
  );
}
