import '../styles/globals.css'
import useColorTheme from "use-color-theme";

function MyApp({ Component, pageProps }) {

  const colorTheme = useColorTheme('light-theme', {
    classNames: ['light-theme', 'dark-theme']
  });
  // add header and footers
  // add theme chnager, and 
  return <Component {...pageProps} />
}

export default MyApp
