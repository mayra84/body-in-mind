import React, { Component, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

// import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Container, Flex} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

// const isLight = Box.bg = 'white'


// const [theme, setTheme] = useState(false)


// const handleThemeToggle = () => {
// default false
// onclick true
// }


export default function MyCalendar(props) {

  const calendar = useSelector((state) => state.calendar)
  
const events = calendar.activities.map((event) => {
  console.log(event)
  return {
    title: event.activity.title,
    start: event.date,
    end: event.date,
    allDay: true,
    resource: event
  }
})


    return (

      // <Container  >
      <Flex
      
        justifyContent='center'
      //   maxWidth='1000'
      // maxHeight='500'
      // bg='white'
      >
        <Box
        //  maxW={'100%'}
         overflow={'scroll'}
          m='2%'
          marginTop={'20'}
          paddingTop={''}
          // bg={useColorModeValue('gray.50', 'gray.900')}
          // color={useColorModeValue('gray.700', 'gray.200')}
          bg={'white'}
          boxShadow={'lg'}
          borderRadius={'10'}
          >
          <Calendar

// maxWidth={'100%'}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "50vh", width: "100vh" }}
          />
        </Box>
      </Flex>
      // </Container>

    );
  }
















// import React from 'react'
// import BigCalendar from 'react-big-calendar'
// // import moment from 'moment'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// // const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// const MyCalendar = props => (
//   <div>
//     <BigCalendar
//       localizer={localizer}
//       // events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//     />
//   </div>
// )

// export default MyCalendar
