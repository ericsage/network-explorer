import React from 'react'
import Paper from 'material-ui/lib/paper'
import AppBar from 'material-ui/lib/app-bar'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import MenuItem from 'material-ui/lib/menus/menu-item'
import SelectField from 'material-ui/lib/select-field'
import RaisedButton from 'material-ui/lib/raised-button'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'

import NetworkViewer from './network_viewer'

export default class NetworkExplorer extends React.Component {

  constructor(props) {
    super(props)
      this.state = {value: "http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/e9006a17-efac-11e5-9051-0660b7976219"}
  }

  handleSwitch(event, index, value) {
    this.setState({value})
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
    var networkItems = []
    this.props.networks.forEach((Location, Name) => (networkItems.push(<MenuItem value={Location} primaryText={Name}/>)))
    console.log(networkItems)
        return (
        <div style={style}>
          <AppBar
            title="Network Explorer"
            iconElementLeft={
              <IconButton href="#" linkButton={true}>
                <FontIcon className="material-icons">share</FontIcon>
              </IconButton>
            }
          />
          <Toolbar>
            <ToolbarGroup firstChild={true} float="left">
              <RaisedButton
                label="Open Network Finder"
                primary={true}
                icon={<FontIcon className="material-icons">track_changes</FontIcon>}
              />
              <SelectField value={this.state.value} onChange={this.handleSwitch.bind(this)}>
              {networkItems}
              </SelectField>
            </ToolbarGroup>
          </Toolbar>
          <NetworkViewer selectedNetwork={this.state.value}/>
        </div>
    )
  }

}
