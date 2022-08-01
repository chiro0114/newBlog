import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Container from './components/Container';
import MainContents from './components/MainContents';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


const MyApp = ({ Component, pageProps }: AppProps) => {
  // return <Component {...pageProps} />;
  return (
    <Container>
      <MainContents>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </MainContents>
    </Container>
  );
};

export default MyApp;
