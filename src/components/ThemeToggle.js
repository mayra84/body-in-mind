import { Button, useColorMode } from '@chakra-ui/react'

import React from 'react'

function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
        <Button borderRadius={'50'} justifyItems={'left'} onClick={toggleColorMode}>
    {colorMode === 'light' ? '🌙' : '☀️'}
</Button>
    </div>
  )
}

export default ThemeToggle