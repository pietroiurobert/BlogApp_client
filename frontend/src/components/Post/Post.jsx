import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Box, Stack, StackDivider, Divider, Button } from '@chakra-ui/react'
import { BiHeart, BiBookmark, BiComment, BiShare } from 'react-icons/bi'

export default function Post(props) {
    const post = props.data;

    return (
        <Card>
            <CardHeader>
                <Heading size='md' display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    {post.name}
                    <Button  width={'fit-content'} variant='ghost' leftIcon={<BiBookmark/>}>
                        Save
                    </Button>
                </Heading>
                <Text pt='2' fontSize='sm'>
                    by {post.testUser.username}
                </Text>
                <Text pt='2' fontSize='sm'>
                    Category: #{post.postCategory}
                </Text>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Text pt='2' fontSize='sm'>
                            {post.content}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiHeart />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare/>}>
                    Share
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiComment />}>
                    Comment
                </Button>
            </CardFooter>
        </Card>
    )
}