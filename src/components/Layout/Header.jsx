import React from 'react'
import { Link } from 'react-router-dom'

import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
const LinkButton =({url ='/',tittle='Home' ,onClose})=>(
   <Link onClick={onClose} to={url}>,
<Button variant={'ghost'}  > {tittle}</Button>
</Link> 
)
// const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
//     <Link onClick={onClose} to={url}>
//       <Button variant={'ghost'}>{title}</Button>
//     </Link>
//   );
const isAuthenticated= true;
const user ={
role:"admin"
};

function Header() {
    const {isOpen,onOpen,onClose} = useDisclosure()
    
    const Logouthandler=()=>{
        console.log("System is logging the user out")
        onClose();
    }
  return (
    <>
<ColorModeSwitcher/>
<Button
onClick={ onOpen}
height={'12'}
width={'12'}
rounded={'full'}
position={'fixed'}
colorScheme='yellow'
top={'6'}
left={'6'}
zIndex={'overlay'}
>
    <RiMenu5Fill />
</Button>
<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay/>
    <DrawerContent>
    <DrawerHeader borderBottomWidth={'1px'}>
Course Bundler
    </DrawerHeader>
    <DrawerBody>
        <VStack spacing={'4'} alignItems={'flex-start'}>
        <LinkButton onClose={onClose} url ='/' tittle='Home'/>
        <LinkButton onClose={onClose} url ='/courses' tittle='Browse All Courses'/>
        <LinkButton onClose={onClose} url ='/request' tittle='Request a course'/>
        <LinkButton onClose={onClose} url ='/contact' tittle='Contact Us'/>
        <LinkButton onClose={onClose} url ='/about' tittle='About'/>
        <HStack justifyContent={'space-evenly'} bottom={'2rem'} position='absolute' width='80%' >

{isAuthenticated?(<>
<VStack>
    <HStack> 
    <Link to="/profile">
<Button variant={'ghost'} colorScheme='yellow'>Profile</Button>

</Link>
    <Link to="/logout">
<Button variant={'ghost'} colorScheme='yellow' onClick={Logouthandler}>    
     <RiLogoutBoxLine/>
Logout</Button>

</Link>

    </HStack>
    {user && user.role ==='admin'&& <Link to='/admin/dashboard'>
    <Button variant={'ghost'} colorScheme={'purple'}>
        <RiDashboardFill style={{margin:"4px"}}/>
        Dashboard
    </Button>
    </Link>}
</VStack>




</>):(<>

<Link to="/login">
<Button colorScheme='yellow'>Login</Button>

</Link>
<p>OR</p>

<Link to="/register">
<Button colorScheme='yellow'>Sign Up</Button>

</Link>



</>)}
        </HStack>
        </VStack>
    </DrawerBody>
    </DrawerContent>

</Drawer>

    
    
    </>
  )
}

export default Header
