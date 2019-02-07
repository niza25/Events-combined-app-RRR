import React from 'react'
import { loadEvents } from '../actions/events'
import { connect } from 'react-redux'
import EventsList from './EventsList'
import CreateEventFormContainer from './CreateEventFormContainer';

class EventsListContainer extends React.Component {

  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    console.log('render props test:', this.props)
    return (
      <div>
        <EventsList events={this.props.events} />
        <CreateEventFormContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventsListContainer)