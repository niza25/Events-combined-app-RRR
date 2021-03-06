import { EVENTS_FETCHED } from '../actions/events'
import { EVENT_CREATE_SUCCESS } from '../actions/events'
import { EVENT_DELETE_SUCCESS } from '../actions/events'

export default (state = [], action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    case EVENT_CREATE_SUCCESS:
      return [...state,
      action.event
      ];
    case EVENT_DELETE_SUCCESS:
      return state.filter(event => event.id !== action.id);
    default:
      return state
  }
}