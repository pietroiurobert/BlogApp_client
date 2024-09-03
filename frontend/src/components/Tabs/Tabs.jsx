import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { AddIcon, Icon } from '@chakra-ui/icons'
import style from './Tabs.module.css'

const handleAddClick = () => {

}

const tabs = ['tech', 'productivity', 'design', 'mental health', 'health', 'money', 'software development']

export default function TabListComponent() {
    return (
        <div className={style.tabsContainer}>
            <Tabs position='relative' variant='unstyled'>
                <TabList display={{base:'none', md: 'flex'}} alignItems={'center'}>
                    <Icon as={AddIcon} boxSize={3} />
                    {
                        tabs.map((element, index)=>{
                           return <Tab key={index}> {element} </Tab>
                        })
                    }
                </TabList>
                <TabIndicator mt='-1.5px' height='1.5px' bg='blue.500' borderRadius='1px' />
                <TabPanels>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}