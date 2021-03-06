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

      <main>
        <section style={{ backgroundColor: '#222', color: '#fff' }}>
          <div className="inner">
            <h1 className="title">
              <img
                src="/martini.svg"
                alt="🍸"
                style={{
                  width: 28,
                  marginBottom: -3,
                  marginRight: 4,
                }}
              />{' '}
              <span>Six</span>
              <span style={{ opacity: 0.5, marginTop: -20 }}>/</span>
              <span style={{ opacity: 1 }}>7</span>
            </h1>
            <p>
              A limited alcohol lifestyle. Followers of <strong>Six/7</strong>{' '}
              never consume more than six alcoholic drinks per seven days.
            </p>
            <div>
              <AppStoreIcons white />
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <h2>What is a drink?</h2>
            <p>
              A pint of average strength beer, a standard glass of wine, a
              normal sized cocktail. Don't take the piss.
            </p>
            <Link href="/about">Tell me more →</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
