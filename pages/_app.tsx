import {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from '../styles';

export default function CartogramWebsite({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
