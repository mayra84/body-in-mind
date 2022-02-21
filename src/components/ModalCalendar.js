import Calendar from "react-calendar";

import React, { useState } from 'react'
import { Flex } from "@chakra-ui/react";

function ModalCalendar() {
    const [date, setDate] = useState(new Date());
   
  return (
    <div>
        <Flex>
        <Calendar 
             onChange={setDate} value={date} p={'10'} showFixedNumberOfWeeks/>

        </Flex>
    </div>
  )
}

export default ModalCalendar
