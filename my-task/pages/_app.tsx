import { Provider } from 'react-redux'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from "./store"
import "../styles/css/all.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
