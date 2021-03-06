import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

export default function MyCalendar(props) {

  const calendar = useSelector((state) => state.calendar)

  const events = calendar.activities.map((event) => {
    return {
      title: event.activity.title,
      start: event.date,
      end: event.date,
      allDay: true,
      resource: event
    }
  })


  return (
    <Flex
      justifyContent='center'
    >
      <Box
        m='2%'
        marginTop={'20'}
        paddingTop={''}
        bg={'white'}
        boxShadow={'lg'}
        borderRadius={'10'}
        overflow={'scroll'}
      >
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "50vh", width: "100vh" }}
        />
      </Box>
    </Flex>
  );
}
