import * as React from 'react'

export default function EventForm(props) {
  return (
    <div>
      <form>
        <label>Name of the event:
        <input type="text" name="name" value={props.values.name} onChange = {props.onChange}/>
        </label>
        <label>Date of the event:
        <input type="text" name="date" value={props.values.date} onChange = {props.onChange}/>
        </label>
        <label>Describe it:
        <input type="text" name="description" value={props.values.description} onChange = {props.onChange}/>
        </label>
        <button onClick = {props.onSubmit}>Submit</button>
      </form>
    </div>
  )
}