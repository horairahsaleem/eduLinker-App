import { Avatar, Box, Button, color, Container, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
export const FileUploadCss={
  
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white"

  
}
const FileUploadStyles={
  "&::file-selector-button": FileUploadCss,
}



function Register() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [name,setName]=useState();
    const [ImagePrev,setImagePrev]=useState();
    const [Image,setImage]=useState();
    const ImageHandler =(e)=>{
      const file = e.target.files[0];
      const reader= new FileReader();
      reader.readAsDataURL(file);
      reader.onload =()=>{
        setImagePrev(reader.result);
        setImage(file);
    
      }
    
    }
  return (
    
    <Container h={'110vh'}>
        <Stack h='full' justifyContent={'center'} spacing={'16'}>
            <Heading children='Registration' textTransform={'uppercase'} />
            <form style={{width:'100%'}}>
      <Box my={'4'} display={'flex'} justifyContent={'center'} >
        <Avatar src={ImagePrev} size={'2xl'}/>

      </Box>

            <Box my={'4'}>

<FormLabel htmlFor='name' children='Name'/>
<Input required id='name' value={name} onChange={e => setName(e.target.value)}
placeholder='Enter Name Here'
type='text'
focusBorderColor='yellow.500'
/>
</Box>
                <Box my={'4'}>

                <FormLabel htmlFor='email' children='Email Address'/>
                <Input required id='email' value={email} onChange={e => setEmail(e.target.value)}
                placeholder='abc@gmail.com'
                type='email'
                focusBorderColor='yellow.500'
                />
                </Box>
                <Box my={'4'}>

                <FormLabel htmlFor='password' children='Password'/>
                <Input required id='password' value={password} onChange={e => setPassword(e.target.value)}
                placeholder='Enter Your Password'
                type='password'
                focusBorderColor='yellow.500'
                />
                </Box>
                <Box my={'4'}>

                <FormLabel htmlFor='chooseavatar' children='Choose Avatar'/>
                <Input accept='image/*' required id='chooseavatar' 
                type='file' focusBorderColor='yellow.500'
                css={FileUploadStyles} onChange={ImageHandler}
                />
                </Box>
               
                <Button type='submit' my={'4'} colorScheme='yellow'>
                    Submit
                </Button>
                <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
                
                </form>
        </Stack>
    </Container>
    
  )
}

export default Register
