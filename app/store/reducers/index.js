import { combineReducers } from 'redux'
import Teams from './TeamReducer'
import Auth from './AuthReducer'
import Tracks from './TrackReducer'
import Dom from './DomReducer'
import Setup from './SetupReducer'
export default combineReducers({ Teams, Auth, Tracks, Dom, Setup })
