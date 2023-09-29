import React from 'react'
import { Spinner, Stack } from '@chakra-ui/react'

const Loader = () => {

  return (
    <Stack>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='yellow.500'
        size='xl'
        m={10}
      />
    </Stack>
  )
}

export default Loader