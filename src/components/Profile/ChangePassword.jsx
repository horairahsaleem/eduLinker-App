import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/Actions/profileActions.js';
import { useNavigate } from 'react-router-dom';



const ChangePassword = () => {
    const [oldPassword,setOldPassword]=useState()
    const [newPassword,setNewPassword]=useState()
    const  navigate =useNavigate()

    
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };

  const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => { 
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
                  navigate('/profile');

    }
  }, [dispatch, error, message]);
  return (
    <Container py={'16'} minH={'90vh'}>
        <form onSubmit={submitHandler}>
            <Heading 
            textAlign={['center','left']}
            my={'16'}
            textTransform={'uppercase'}
            children='change password'
            />
            <VStack spacing={'8'}>
            <Input required id='oldpassword'  onChange={e => setOldPassword(e.target.value)}
                placeholder='Old Password'
                type='password'
                focusBorderColor='yellow.500'
                />  
            <Input required id='newpassword'  onChange={e => setNewPassword(e.target.value)}
                placeholder=' New Password'
                type='password'
                focusBorderColor='yellow.500'
                />  
                <Button             
                isLoading={loading}
 w={'full'} colorScheme='yellow' type='submit'>Change Password</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword
