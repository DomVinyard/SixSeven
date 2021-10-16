export default function AppStoreIcons() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 24 }}>
      <a href={'about:blank'} target="_blank">
        <img
          alt="App Store"
          style={{ width: 130, marginRight: 8 }}
          src="/apple_store.png"
        />
      </a>
      <a href={'about:blank'} target="_blank">
        <img
          alt="Google Play Store"
          style={{ width: 130 }}
          src="/google_store.png"
        />
      </a>
    </div>
  );
}
