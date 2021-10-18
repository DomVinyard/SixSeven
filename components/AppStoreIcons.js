const APP_STORE_URL = 'https://apps.apple.com/us/app/six7/id1590673634';

export default function AppStoreIcons({ white = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
      <a href={APP_STORE_URL} target="_blank">
        <img
          alt="App Store"
          style={{ width: 160, marginRight: 8 }}
          src={`/apple_store${white ? '_white' : ''}.png`}
        />
      </a>
    </div>
  );
}
