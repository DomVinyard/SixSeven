import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section style={{ backgroundColor: '#222', color: '#fff' }}>
          <div className="inner">
            <h2 className="title">🍸 6/7</h2>
            <p>
              A strategy for limited alcohol consumption. 6/7 followers{' '}
              <strong style={{ textDecoration: 'underline' }}>never</strong>{' '}
              consume more than six drinks per seven days.
            </p>
          </div>
        </section>
        <section>
          <div className="inner">
            <h2 className="title">What is a drink?</h2>
            <p>
              A pint of average strength beer, a mediumish glass of wine, a
              normal sized cocktail. Don't take the piss.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
