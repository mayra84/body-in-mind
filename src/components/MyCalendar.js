// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

// // import "./App.css";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);

// class App extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment().add(1, "days").toDate(),
//         title: "Some title",
//       },
//     ],
//   };

//   onEventResize = (data) => {
//     const { start, end } = data;

//     this.setState((state) => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: [...state.events] };
//     });
//   };

//   onEventDrop = (data) => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <div className="App">
//         <DnDCalendar
//           defaultDate={moment().toDate()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

// export default App;










// import { FC, useState } from 'react'
// import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'
// import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
// // import format from 'date-fns/format'
// // import parse from 'date-fns/parse'
// // import startOfWeek from 'date-fns/startOfWeek'
// // import getDay from 'date-fns/getDay'
// // import enUS from 'date-fns/locale/en-US'
// // import addHours from 'date-fns/addHours'
// // import startOfHour from 'date-fns/startOfHour'

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// function MyCalendar() {
//   const [events, setEvents] = useState()([
//     {
//       title: 'Learn cool stuff',
//       start,
//       end,
//     },
//   ])

//   const onEventResize = data => {
//     const { start, end } = data

//     setEvents(currentEvents => {
//       const firstEvent = {
//         start: new Date(start),
//         end: new Date(end),
//       }
//       return [...currentEvents, firstEvent]
//     })
//   }

//   const onEventDrop= data => {
//     console.log(data)
//   }

//   return (
//     <DnDCalendar
//       defaultView='week'
//       events={events}
//       localizer={localizer}
//       onEventDrop={onEventDrop}
//       onEventResize={onEventResize}
//       resizable
//       style={{ height: '100vh' }}
//     />
//   )
// }

// // const locales = {
// //   'en-US': enUS,
// // }
// // const endOfHour = (date) => addHours(startOfHour(date), 1)
// // const now = new Date()
// // const start = endOfHour(now)
// // const end = addHours(start, 2)
// // // The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
// // const localizer = dateFnsLocalizer({
// //   format,
// //   parse,
// //   startOfWeek,
// //   getDay,
// //   locales,
// // })
// // //@ts-ignore
// // const DnDCalendar = withDragAndDrop(Calendar)

// export default MyCalendar






















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
        
          m='0 auto'
          marginTop={'20'}
          paddingTop={''}
          // bg={useColorModeValue('gray.50', 'gray.900')}
          // color={useColorModeValue('gray.700', 'gray.200')}
          bg={'white'}
          boxShadow={'lg'}
          borderRadius={'10'}>
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
