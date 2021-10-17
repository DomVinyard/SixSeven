export default function AppStoreIcons({ white = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
      <a href={'about:blank'} target="_blank">
        <img
          alt="App Store"
          style={{ width: 160, marginRight: 8 }}
          src={`/apple_store${white ? '_white' : ''}.png`}
        />
      </a>
      {/* <a href={'about:blank'} target="_blank">
        <img
          alt="Google Play Store"
          style={{ width: 130 }}
          src="/google_store.png"
        />
      </a> */}
    </div>
  );
}
