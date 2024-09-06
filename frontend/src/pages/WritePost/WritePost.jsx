import { useState, useEffect } from 'react'
import { Flex, Textarea, Text, Button, Box } from '@chakra-ui/react'
import { BiSend, BiNotepad  } from "react-icons/bi";
import axios from 'axios'

const saveNewPost = async (title, content) => {
    axios({
        method: 'POST',
        url: 'http://localhost:8080/posts/save', 
        data: {
            name: title,
            postCategory: 'TECH',
            userID: 1,
            content: content,
            likes: 0,
            shares: 0
        },
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>alert(err));
}

export default function WritePost() {
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    
    let handleContentChange = (e) => {
        let inputValue = e.target.value
        setContent(inputValue)
    }

    let handleTitleChange = (e) => {
        let inputValue = e.target.value
        setTitle(inputValue)
    }

    return (
        <>
            <Flex direction={'column'} w={{base: '90%', md: '58%'}} gap='1rem' pt={2} >
                <Box>
                    <Text size='md'> Title </Text>
                    <Textarea
                        value={title}
                        resize={'none'}
                        onChange={handleTitleChange}
                        placeholder='Find a unique title for your post'
                        size='md'
                    />
                </Box>
                <Box>
                    <Text> Content </Text>
                    <Textarea
                        value={content}
                        resize={'none'}
                        onChange={handleContentChange}
                        placeholder='Write your story here...'
                        size='md'
                        h='30vh'
                    />
                </Box>
                <Flex justify='space-between'>
                    <Flex gap='2%'>
                        <Button leftIcon={<BiSend />} onClick={()=>saveNewPost(title, content)}> Publish </Button>
                        <Button leftIcon={<BiNotepad />} variant='outline'> Save as draft </Button>
                    </Flex>
                    <Button colorScheme='red' variant='outline'> Cancel </Button>
                </Flex>
            </Flex>
        </>
    )
}