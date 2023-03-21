import '../styles/globals.css'
import React, {FC} from 'react';
import type { AppProps } from 'next/app'

import {Provider} from 'react-redux';
import { wrapper } from '../utils/store'
import { PersistGate } from "redux-persist/integration/react";

const App:FC<AppProps> = ({ Component, ...rest }) => {
  const {store, props} = wrapper.useWrappedStore(rest);  
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Component {...props.pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default App
