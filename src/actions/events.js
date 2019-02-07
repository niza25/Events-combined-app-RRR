import request from 'superagent';

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'

// url where I fetch from
const baseUrl = 'http://localhost:4000'

// get all events
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events.length) return
  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

// create a new event
export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

// get one event - display details
const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvent = (id) => (dispatch) => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

// delete
const deleteEventSuccess = (id) => ({
  type: EVENT_DELETE_SUCCESS,
  id
})

export const deleteEvent = (id) => (dispatch) =>{
  request
  .delete(`${baseUrl}/events/${id}`)
  .then(() => dispatch(deleteEventSuccess(id)))
  .catch(console.error)
  }

// update
const updateEventSuccess = (event) => ({
  type: UPDATE_EVENT_SUCCESS,
  event
})

export const updateEvent = (id, data) => (dispatch) => {
  request
  .patch(`${baseUrl}/events/${id}`)
  .send(data)
  .then(response => {
    dispatch(updateEventSuccess(response.body))
  })
  .catch(console.error)
}