import { connect } from 'react-redux'
import NetworkExplorer from '../component/network_explorer'
import { updateNetworks } from '../state/reducers/network_explorer_reducer'

function mapStateToProps(state) {
  return {
    networks: state.networkExplorer.get('networks')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateNetworks: (networks) => dispatch(updateNetworks(networks))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NetworkExplorer)
