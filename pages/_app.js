import '../styles/globals.css'

if (typeof window !== 'undefined' && localStorage.colorTheme !== '"light-theme"') {
  localStorage.setItem("colorTheme", '"dark-theme"');
} else if (typeof window !== 'undefined' && localStorage.colorTheme !== '"dark-theme"') {
  localStorage.setItem("colorTheme", '"light-theme"');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
