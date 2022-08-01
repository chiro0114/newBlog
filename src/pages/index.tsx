import type { NextPage } from 'next'
import {Box} from '@chakra-ui/react'
import Sec from './components/Sec'
import SecTop from './components/section/SecTop'

const Home: NextPage = () => {
  return (
    <Sec Component={SecTop} />
  )
}

export default Home
