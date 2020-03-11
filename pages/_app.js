// import App from 'next/app'
// import { register, unregister } from 'next-offline/runtime';
import React from 'react';
//////////////////////////////////////////////////////////////////d

class App extends React.Component {

  // componentDidMount () {
  //   register()
  // }
  // componentWillUnmount () {
  //   unregister()
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
      </div>
    )
  }
}
  
export default App;
