import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import Layout from '../components/common/layout'
import { AppProvider } from '../context/AppContext'
import { ToastContainer } from 'react-toastify';
import PersistLogin from '../middleware/persist-login';
import SSELayer from '../middleware/sse-layer';

function App({ Component, pageProps }: AppProps) {

  document.requestStorageAccess().then(
    () => { console.log('access granted') },
    () => { console.log('access denied') }
  );

  return (
    <AppProvider>
      <Layout>
        <ToastContainer
          theme='dark'
          position='bottom-left'
          autoClose={3000}
        />
        <PersistLogin>
          <SSELayer>
            <Component {...pageProps} />
          </SSELayer>
        </PersistLogin>
      </Layout>
    </AppProvider>
  )
}

export default App
