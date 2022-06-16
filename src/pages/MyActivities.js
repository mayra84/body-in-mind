import React from 'react'
import ScheduledActivities from '../components/ScheduledActivities'
import MyCalendar from '../components/MyCalendar'
import { useSelector } from 'react-redux'
import CalendarHero from '../components/CalendarHero'

function MyActivities() {
  const calendar = useSelector((state) => state.calendar)
  return (
    <div>
      {calendar.activities.length === 0 ? (
        <CalendarHero />
      ) : (
        null
      )}
      <MyCalendar />
      <ScheduledActivities />

    </div>
  )
}

export default MyActivities
