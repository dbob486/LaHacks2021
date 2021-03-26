import React from 'react'
import {Flex} from '@chakra-ui/react'

const NavBarContainer = ({ children, ...props}) => {
    return (
        
            <Flex
                as="nav"
                align="center"
                justifyContent="normal"
                wrap="wrap"
                w="100%"
                p={4}
                bg={"blue.100"}
                color={"black"}
                border="2px"
                borderColor="gray.200"
               // {...props}
            >
                {children}
            </Flex>
    )
}
export default NavBarContainer