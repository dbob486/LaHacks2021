import NavBarContainer from './NavBarContainer'
import Logo from './Logo'
import MenuToggle from './MenuToggle'
import React from 'react'
import LogIn from './Login'
import SignUp from './Signup'
import {Flex, Box, Spacer}  from '@chakra-ui/react'

function NavBar() {
  return (
    <Flex>
    <NavBarContainer>
      <Box >
        <Logo/>
      </Box>
      <Spacer/>
      <Box >
         <MenuToggle />
      </Box>

      <Box>
         <LogIn/>
      </Box>

      <Box>
          <SignUp/>
       </Box>
      

       </NavBarContainer>
    </Flex>
  )
}
   

  export default NavBar