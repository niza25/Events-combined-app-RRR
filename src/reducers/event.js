import { EVENT_FETCHED } from '../actions/events'
import { UPDATE_EVENT_SUCCESS } from '../actions/events'

export default (state = null, action = {}) => {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event;
      // still check, needs checking
    case UPDATE_EVENT_SUCCESS:
      return action.event;
    default:
      return state
  }
}