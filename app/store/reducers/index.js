import { combineReducers } from 'redux'
import Teams from './TeamReducer'
import Auth from './AuthReducer'
import Tracks from './TrackReducer'
import Dom from './DomReducer'
import Setup from './SetupReducer'
import Profile from './ProfileReducer'
export default combineReducers({ Teams, Auth, Tracks, Dom, Setup, Profile })
