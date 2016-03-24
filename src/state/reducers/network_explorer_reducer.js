import { UPDATE_NETWORKS } from "../actions"
import { Map } from 'immutable'

const defaultExplorer = Map({
  networks: Map({
    "Cyto Net": "http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/e9006a17-efac-11e5-9051-0660b7976219",
    "Cyto Dark": "http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/9c84ee32-efb3-11e5-9051-0660b7976219",
  })
})

export default function networkExplorer(state = defaultExplorer, action) {
    switch(action.type) {
      case UPDATE_NETWORKS:
        return state.set('networks', action.networks)
      default:
        return state
    }
}

export function updateNetworks(networks) {
  return {
    type: UPDATE_NETWORKS,
    results: networks
  }
}


