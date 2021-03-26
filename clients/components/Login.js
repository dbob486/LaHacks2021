import {Button} from '@chakra-ui/react'
import NextLink from 'next/link'


export default function LogIn () {
    return(
            <Button
            mr="4"
            ml="5%"
            postion="fixed"
            color="black"
            colorScheme="#63B3ED"
            fill="gray"
            variant="outline"
            borderColor="gray.200"
            border="4px"
            size="md"
            >Log In</Button>
    )
}