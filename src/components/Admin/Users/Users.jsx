import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const Users = () => {
  const users = [{
     _id:"yy66iotyrew2211dc",
      name:"Horairah",
      email:"Dummy@gamil.com",
      role:"Admin",
      subscription:{
       status:'active'
      }
    }
  ]
  const updateHandler=(userId)=>{
    console.log(userId)
  }
  const deleteButtonHandler=(userId)=>{
    console.log(userId)
  }
  return (
    <Grid
    
    minH={'100VH'}
    templateColumns={['1fr','5fr 1fr']}
    css={{
        cursor:`url${cursor},default`,
    }}
    >
        <Box p={['0','16']} overflow={'auto'}>
        <Heading textTransform={'uppercase'} textAlign={['center','left']} my={'16'} children='All  Users'/>
        <TableContainer w={['100vw','full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available Users in the database</TableCaption>
<Thead>
  <Tr>
    <Th>ID</Th>
    <Th>Name</Th>
    <Th>Email</Th>
    <Th>Role</Th>
    <Th>Subscription</Th>
    <Th isNumeric>Action</Th>
  </Tr>
</Thead>
<Tbody>
  {users.map(item =>(
    <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}  item={item} key={item._id} />
  ))}

</Tbody>

          </Table>
        </TableContainer>



          
        </Box>
    <Sidebar/>
    </Grid>
  )
}

export default Users
 function Row({item,updateHandler,deleteButtonHandler}){

 return( 
  <Tr>
<Td>#{item._id}</Td>
<Td>{item.name}</Td>
<Td>{item.email}</Td>
<Td>{item.role}</Td>
<Td>{item.subscription.status==='active' ? 'Active':'Not Active'}</Td>
<Td isNumeric>
<HStack>
<Button variant={'outline'} color={'purple.500'} onClick={() => updateHandler (item._id)}>
  Change Role

</Button>
<Button onClick={()=>deleteButtonHandler(item._id)}>
  <RiDeleteBin7Fill/>
</Button>


</HStack>


</Td>

  </Tr>
 )
 }