import React from 'react'
import { Button } from "@chakra-ui/react"
import { ChevronDownIcon} from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"
//can't make the button stay in place...I wanted it stay on next to the logo
export default function  MenuToggle() {
  return(
    <Menu >
       <MenuButton ml="-450"
                   position="fixed"
                   my="-5"     
                   as={Button} 
                   rightIcon={<ChevronDownIcon />} 
                   variant="solid"
       >

                   
            ...
       </MenuButton>
       <MenuList>
           <MenuItem>Home</MenuItem>
           <MenuItem>About</MenuItem>
           <MenuItem>Chat</MenuItem>
           <MenuItem>Video Chat</MenuItem>
           <MenuItem>Help!</MenuItem>
         </MenuList>
    </Menu>
  )

  
}


