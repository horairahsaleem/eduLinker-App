import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'

const AdminCourses = () => {
  const course = [{
     _id:"yy66iotyrew2211dc",
      title:"React Course               ",
      category:"Web Development",
      createdBy:"Horairah Saleem",
      views:123,
      numOfVedios:12,
      poster:{
       url:'https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_1280.jpg'
      }
    }
  ]
  const {isOpen,onClose,onOpen} = useDisclosure()
  const courseDetailsHandler=(userId)=>{
onOpen()
  }
  const deleteButtonHandler=(userId)=>{
    console.log(userId)
  }
  const deleteLectureButtonHandler=(courseId,lectureId)=>{
    console.log(courseId)
    console.log(lectureId)
  }
  const addLectureHandler=(e,courseId,title,description,video)=>{
    e.prevent.default()
    
  }

  return (
    <Grid
    
    minH={'100VH'}
    templateColumns={['1fr','5fr 1fr']}
    css={{
        cursor:`url${cursor},default`,
    }}
    >
        <Box p={['0','8']} overflow={'auto'}>
        <Heading textTransform={'uppercase'} textAlign={['center','left']} my={'16'} children='All  Users'/>
        <TableContainer w={['100vw','full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available Courses in the database</TableCaption>
<Thead>
  <Tr>
    <Th>ID</Th>
    <Th>Poster</Th>
    <Th>Title</Th>
    <Th>Category</Th>
    <Th>Creator</Th>
    <Th isNumeric>Views</Th>
    <Th isNumeric>Lectures</Th>
    <Th isNumeric>Action</Th>
  </Tr>
</Thead>
<Tbody>
  {course.map(item =>(
    <Row courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler}  item={item} key={item._id} />
  ))}

</Tbody>

          </Table>
        </TableContainer>


<CourseModal isOpen={isOpen} onClose={onClose} 
id={'sdsdsadsad'}
 courseTitle='React Course'
  deleteButtonHandler={deleteLectureButtonHandler} 
  addLectureHandler={addLectureHandler} />
          
        </Box>
    <Sidebar/>
    </Grid>
  )
}

 function Row({item,courseDetailsHandler,deleteButtonHandler}){

 return( 
  <Tr>
<Td>#{item._id}</Td>
<Td> <Image src={item.poster.url}/></Td>
<Td>{item.title}</Td>
<Td textTransform={'uppercase'}>{item.category}</Td>
<Td>{item.createdBy}</Td>
<Td isNumeric>{item.views}</Td>
<Td isNumeric>{item.numOfVedios}</Td>

<Td isNumeric>
<HStack>
<Button variant={'outline'} color={'purple.500'} onClick={() => courseDetailsHandler (item._id)}>
  View Lectures

</Button>
<Button onClick={()=>deleteButtonHandler(item._id)}>
  <RiDeleteBin7Fill/>
</Button>


</HStack>


</Td>

  </Tr>
 )
 }

export default AdminCourses
