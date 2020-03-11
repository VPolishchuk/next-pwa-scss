import App from 'next/app';
// import { register, unregister } from 'next-offline/runtime';
// import React from 'react';
// import { Loader } from '../components/layout';
import {PageTransition} from 'next-page-transitions';
/// ///////////////////////////////////////////////////////////////d

class MyApp extends App {
  // componentDidMount () {
  //   register()
  // }
  // componentWillUnmount () {
  //   unregister()
  // }

  render () {
    const {Component, pageProps} = this.props;
    return (
      <div>
        {/* <PageTransition
          timeout={300}
          timeout={300}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: 400,
            exit: 0
          }}
          loadingClassNames="lds-hourglass"
        > */}
          <Component {...pageProps} />
        {/* </PageTransition> */}
      </div>
    )
  }
}

export default MyApp
