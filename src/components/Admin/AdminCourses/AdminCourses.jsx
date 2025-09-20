import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCourses,
  getCourseLectures,
} from '../../../redux/Actions/courseActions.js';
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from '../../../redux/Actions/adminActions.js';
import toast from 'react-hot-toast';

const AdminCourses = () => {
   const { courses, lectures } = useSelector(state => state.course);

  const { loading, error, message } = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const {isOpen,onClose,onOpen} = useDisclosure()
const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

   const courseDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    setCourseId(courseId);
    setCourseTitle(title);
    onOpen();
  };
 const deleteButtonHandler = courseId => {
    console.log(courseId);
    dispatch(deleteCourse(courseId));
  };

  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId)); 
  };
  const addLectureHandler= async (e,courseId,title,description,video)=>{
e.preventDefault();
    const myForm = new FormData();

    myForm.append('title', title); 
    myForm.append('description', description);
    myForm.append('file', video);

    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));    
  }
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    dispatch(getAllCourses());
  }, [dispatch, error, message, onClose]);

  return (
    <Grid
    
    minH={'100VH'}
    templateColumns={['1fr','5fr 1fr']}
    css={{
        cursor:`url${cursor},default`,
    }}
    >
        <Box p={['0','8']} overflow={'auto'}>
        <Heading textTransform={'uppercase'} textAlign={['center','left']} my={'16'} children='All  Courses'/>
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
  {courses.map(item =>(
    <Row  loading={loading} courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler}  item={item} key={item._id} />
  ))}

</Tbody>

          </Table>
        </TableContainer>


<CourseModal 
          loading={loading}
isOpen={isOpen} onClose={onClose} 
id={courseId}
 courseTitle={courseTitle}
  deleteButtonHandler={deleteLectureButtonHandler} 
  addLectureHandler={addLectureHandler} 
  lectures={lectures}
  />
          
        </Box>
    <Sidebar/>
    </Grid>
  )
}

 function Row({item,courseDetailsHandler,deleteButtonHandler,loading}){

 return( 
  <Tr>
<Td>#{item._id}</Td>
<Td> <Image src={item.poster.url}/></Td>
<Td>{item.title}</Td>
<Td textTransform={'uppercase'}>{item.category}</Td>
<Td>{item.createdby}</Td>
<Td isNumeric>{item.views}</Td>
<Td isNumeric>{item.numOfVideos}</Td>

<Td isNumeric>
<HStack>
<Button isLoading={loading} variant={'outline'} color={'purple.500'} onClick={() => courseDetailsHandler (item._id , item.title)}>
  View Lectures

</Button>
<Button isLoading={loading} onClick={()=>deleteButtonHandler(item._id)}>
  <RiDeleteBin7Fill/>
</Button>


</HStack>


</Td>

  </Tr>
 )
 }

export default AdminCourses
