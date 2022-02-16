import { Center, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


export default function Sample() {

  const [value, onChange] = useState(new Date());

  return (
    <div className="Sample">
      <header>
        <h1>Choose a date!</h1>
      </header>
      <Center>
      {/* <Flex justify={'center'}> */}
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </main>
      </div>
      {/* </Flex> */}
      </Center>
    </div>
  );
}