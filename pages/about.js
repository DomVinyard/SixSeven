import Head from 'next/head';
import AppStoreIcons from '../components/AppStoreIcons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Six/7</title>
        <meta
          name="description"
          content="A community of responsible drinkers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div
          style={{
            backgroundColor: '#fff',
            color: '#222',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
            padding: '1rem auto',
          }}
        >
          <div className="inner">
            <Link href="/">← Back</Link>
            <h2>Tell me more</h2>
            <p>
              Six/7 is a community of responsible drinkers. We find six
              alcoholic drinks per week to be a good liberal limit. If you
              regularly drink more than this there are some great benefits to
              cutting back on alcohol.
              <ul style={{ paddingLeft: 22 }}>
                <li>🎯 Weight loss</li>
                <li>🛌 Improved sleep quality</li>
                <li>⚡️ Increased energy</li>
                <li>🧘‍♀️ Improved mental health</li>
                <li>🧠 Improved brain function</li>
                <li>🩺 Lower risk of diseases</li>
              </ul>
            </p>
            <p>
              The app helps you stay on track and costs less than a glass of
              wine.
            </p>
            <div style={{ marginTop: 32 }}>
              <AppStoreIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
