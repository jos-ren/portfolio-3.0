import '../styles/globals.css'
import useColorTheme from "use-color-theme";

if (typeof window !== 'undefined' && localStorage.colorTheme !== '"light-theme"') {
  localStorage.setItem("colorTheme", '"dark-theme"');
  // console.log(localStorage.colorTheme)
} else if (typeof window !== 'undefined' && localStorage.colorTheme !== '"dark-theme"') {
  localStorage.setItem("colorTheme", '"light-theme"');
  // console.log(localStorage.colorTheme)
}

function MyApp({ Component, pageProps }) {

  // console.log(localStorage.colorTheme)

  const colorTheme = useColorTheme('dark-theme', {
    classNames: ['light-theme', 'dark-theme']
  });

  return <Component {...pageProps} />
}

export default MyApp
