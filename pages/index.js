import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>6/7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section style={{ backgroundColor: '#222', color: '#fff' }}>
          <div className="inner">
            <h2 className="title">
              <img
                src="/martini.svg"
                alt="🍸"
                style={{ width: 17, marginBottom: -3, marginRight: 4 }}
              />{' '}
              6/7
            </h2>
            <p>
              A limited alcohol lifestyle. Followers of 6/7 never consume more
              than six drinks per seven days.
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
