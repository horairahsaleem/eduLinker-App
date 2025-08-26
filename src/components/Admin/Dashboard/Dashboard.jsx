import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart'

const DataBox =({title,qty,qtyPercentage,profit})=>(
    <Box
    p={'8'}
    borderRadius={'lg'}
    w={['full','20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
        <Text children={title}/>
        <HStack spacing={'8'}>
            <Text fontSize={'2xl'} fontWeight={'bold'} children={qty}/>
            <HStack>
            <Text children={`${qtyPercentage}%`}/>
            {profit?(<RiArrowUpLine color='green'/>):(<RiArrowDownLine color='red' />)}
        </HStack>
            
        </HStack>
        <Text opacity={'0.6'} children='Since last month'/>

    </Box>

)
const Bar =({title,value,profit})=>(
    <Box py={'4'} px={['0','20']}>
        <Heading size={'sm'} ml={'2'} children={title}/>
        <HStack w={'full'} alignItems={'center'}>
          <Text children={profit?'0%':`-${value}%`}/> 
        <Progress w={'full'} value={profit?value:0} colorScheme='purple' />
          <Text children={`${value>100?value:100}%`}/>  

        </HStack>

    </Box>

)

const Dashboard = () => {
  return (
    <Grid
    
    minH={'100VH'}
    templateColumns={['1fr','5fr 1fr']}
    css={{
        cursor:`url${cursor},default`,
    }}
    >
        <Box boxSizing='border-box' py={'16'} px={['4','0']}>
            <Text
            textAlign={'center'}
            opacity={'0.5'}
            children={`Last change was on${String(new Date())}`}
            />
            <Heading 
            ml={['0','16']}
            mb={'16'}
        textAlign={['center','left']}
        children='Dashboard'
            />
            <Stack 
            direction={['column','row']}
            justifyContent={'space-evenly'}
            minH={'24'}
            >
                <DataBox title='Views' qty={67} qtyPercentage={30} profit={true}/>
                <DataBox title='Users' qty={78} qtyPercentage={80} profit={true}/>
                <DataBox title='Subscription' qty={12} qtyPercentage={20} profit={false}/>

            </Stack>
            <Box
            m={['0','16']}
            borderRadius={'lg'}
            p={['0','16']}
            mt={['4','16']}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}

            >
                <Heading 
                textAlign={['center','left']}
                size={'md'}
                children='Views Graph'
                pt={['8','0']}
                ml={['0','16']}/>
                <LineChart/>


            </Box>
            <Grid templateColumns={['1fr','2fr 1fr']}>
                <Box p={'4'}>
                    <Heading
                    size={'md'}
                    my={'8'}
                    ml={['0','16']}
                    textAlign={['center','left']}
                    >
                        Progress Bar
                    </Heading>
                    <Bar profit={true} title={'Views'} value={67}/>
                    <Bar profit={true} title={'Users'} value={78}/>
                    <Bar profit={false} title={'Subscription'} value={20}/>

                </Box>
                <Box boxSizing='border-box' py={'4'} p={['0','16']} >
                    <Heading textAlign={'center'} size={'md'} mb={'4'} children='Users'/>
                    <DoughnutChart/>
                </Box>

            </Grid>

        </Box>
    <Sidebar/>
    </Grid>
  )
}

export default Dashboard
