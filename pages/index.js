import Head from 'next/head';

export const AppStores = ({ width = 140, isBottom }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <a href={'about:blank'} target="_blank">
        <img
          alt="App Store"
          style={{ width, marginRight: 8 }}
          src="/apple_store.png"
        />
      </a>
      <a href={'about:blank'} target="_blank">
        <img
          alt="Google Play Store"
          style={{ width }}
          src="/google_store.png"
        />
      </a>
    </div>
  );
};

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
            <h1 className="title">
              <img
                src="/martini.svg"
                alt="🍸"
                style={{
                  width: 17,
                  marginBottom: -3,
                  marginRight: 4,
                }}
              />{' '}
              6/7
            </h1>
            <p>
              A limited alcohol lifestyle. Followers of 6/7 never consume more
              than six alcoholic drinks per seven days.
            </p>
            <AppStores />
          </div>
        </section>
        <section>
          <div className="inner">
            <h2 className="title">What is a drink?</h2>
            <p>
              A pint of average strength beer, a mediumish glass of wine, a
              normal sized cocktail. Don't take the piss.
            </p>
            <AppStores />
          </div>
        </section>
      </main>
    </div>
  );
}
