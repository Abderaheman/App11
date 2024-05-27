import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../actions/eventActions';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);
  const loading = useSelector(state => state.events.loading);
  const error = useSelector(state => state.events.error);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <div>{event.title}</div>
            <div>{event.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
