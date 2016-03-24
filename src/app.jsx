import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
require("./style/app.scss")

import injectTapEventPlugin from 'react-tap-event-plugin';

import NetworkExplorer from './container/network_explorer'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store()}>
    <NetworkExplorer/>
  </Provider>,
  document.getElementById('frame')
)
