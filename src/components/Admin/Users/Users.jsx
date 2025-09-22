import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from '../../../redux/Actions/adminActions.js';
import toast from 'react-hot-toast';


const Users = () => {
const { users = [], loading, error, message } = useSelector(state => state.admin || {});
  
  const dispatch = useDispatch();

  const updateHandler = userId => {
    dispatch(updateUserRole(userId));
  };
  const deleteButtonHandler = userId => {
    dispatch(deleteUser(userId));
  };

// Fetch users once on mount
useEffect(() => {
  dispatch(getAllUsers());
}, [dispatch]);

// Handle messages/errors separately
useEffect(() => {
  if (error) {
    toast.error(error);
    dispatch({ type: "clearError" });
  }
  if (message) {
    toast.success(message);
    dispatch({ type: "clearMessage" });
  }
}, [error, message, dispatch]);

console.log('USERS  ',users)

  
  return (
    <Grid
    
    minH={'100VH'}
    templateColumns={['1fr','5fr 1fr']}
    css={{
        cursor:`url(${cursor}),default`,
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
  { users && users.map(item =>(
    <Row loading={loading} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}  item={item} key={item._id} />
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
 function Row({item,updateHandler,deleteButtonHandler, loading}){

 return( 
  <Tr>
      {console.log('item id' ,item)}

<Td>#{item._id}</Td>
<Td>{item.name}</Td>
<Td>{item.email}</Td>
<Td>{item.role}</Td>
<Td>{ item.subscription && item.subscription.status==='active' ? 'Active':'Not Active'} </Td>
<Td isNumeric>
<HStack>
<Button  isLoading={loading} variant={'outline'} color={'purple.500'} onClick={() => updateHandler (item._id)}>
  Change Role

</Button>
<Button  isLoading={loading} onClick={()=>deleteButtonHandler(item._id)}>
  <RiDeleteBin7Fill/>
</Button>


</HStack>


</Td>

  </Tr>
 )
 }