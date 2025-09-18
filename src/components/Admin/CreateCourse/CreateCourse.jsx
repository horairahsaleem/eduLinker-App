import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { FileUploadCss } from '../../Auth/Register'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../../redux/Actions/adminActions.js';
import toast from 'react-hot-toast';

const CreateCourse = () => {

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [createdby,setCreatedBy] = useState('')
  const [category,setCategory] = useState('')
  const[image,setImage]=useState('')
  const [imagePrev,setImagePrev] = useState('')

    const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);

  const categories=[
  'Web Development','Data Science','DataBase','Data Structures and Algorithms','Artificial Intelligence','Game development'
]
  const ImageHandler =(e)=>{
    const file = e.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload =()=>{
      setImagePrev(reader.result);
      setImage(file);
  
    }
  
  }

const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('category', category);
    myForm.append('createdby', createdby);
    myForm.append('file', image);
    dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Grid
    
    minH={'100VH'}
    templateColumns={['1fr','5fr 1fr']}
    css={{
        cursor:`url${cursor},default`,
    }}
    >
        <Container py={'16'}>
          <form onSubmit={submitHandler}>
            <Heading textTransform={'uppercase'} textAlign={['center','left']} my={'16'} children='Create Course'/>
            <VStack m={'auto'} spacing={'8'}>
              <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Title'
              type='text'
              focusBorderColor='purple.300'/>
              <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder='Description'
              type='text'
              focusBorderColor='purple.300'/>
              <Input
              value={createdby}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder='CreatedBy'
              type='text'
              focusBorderColor='purple.300'/>
              <Select  focusBorderColor='purple.300'
              value={category}
              onChange={e => setCategory(e.target.value)}>
                <option  value=''>Catergory</option>
                {categories.map(item=>(
                  <option key={item}    value={item}>{item}</option>
                ))}

              </Select>
              <Input accept='image/*' required  
                type='file' focusBorderColor='purple.300'
                css={{
                  '&::file-selector-button':{
                    ...FileUploadCss,color:'purple'
                  },
                }} onChange={ImageHandler}
                />
                {
                  imagePrev && (
                    <Image src={imagePrev} boxSize={'64'} objectFit={'contain'}/>
                  )
                }
       <Button isLoading={loading} type='submit' w={'full'} colorScheme='purple'>
        Create
       </Button>
            </VStack>
          </form>

        </Container>
    <Sidebar/>
    </Grid>
  )
}

export default CreateCourse
