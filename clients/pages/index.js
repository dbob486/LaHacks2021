
import Head from 'next/head'
import {Heading} from '@chakra-ui/react'


import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
    <Head>
      <title>LaHacks2021: Impact</title>
    </Head>
    <NavBar/>
    <main>
      
      <Heading align="center"
            m={6} >
        Welcome to ):mmm:) !
      </Heading>
      
    </main>
    </>
  )
}
