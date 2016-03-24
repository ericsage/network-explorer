import React from 'react'

import { CyNetworkWidget } from 'cywidget-network'

export default class NetworkViewer extends React.Component {

  constructor(props) {super(props)}

  render() {
    const style = {
      position: 'absolute',
      top: 120,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'grey'
    }
     console.log("Rendered network")
        console.log(this.props.selectedNetwork)
    return (
               <div style={style}>
          <CyNetworkWidget networkLocation={this.props.selectedNetwork} width='100%' height='900px' background='grey'/>
        </div>
    )
  }

}
