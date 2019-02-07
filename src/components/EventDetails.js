import * as React from 'react'
import EventForm from './EventForm'

export default function EventDetails(props) {
  if (props.editMode) {
    return (
      <div>
        Edit your event:
<EventForm
          values={{}}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        />
      </div>

    )
  }
  return (
    <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onDelete}>Delete this event</button>
      <button onClick={props.onEdit}>Update / Edit</button>
    </div>
  )
}