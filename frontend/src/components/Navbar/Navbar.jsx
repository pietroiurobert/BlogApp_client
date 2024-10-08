'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, EditIcon } from '@chakra-ui/icons';
import { BiLogOut } from "react-icons/bi";
import { color } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom'

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')} 
        px={4}  
        position="sticky"
        top={0}
        zIndex={10}
        boxShadow="md"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={'center'}>
            <Box onClick={()=>navigate('/posts')}  _hover={{ cursor: 'pointer' }}>Medium</Box>
            <InputGroup display={{base: 'none', md: 'flex'}} w={'20vw'}>
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.300' />
              </InputLeftElement>
              <Input  placeholder='Search' size='md'/>
            </InputGroup>


            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} gap={4}>
            {
              location.pathname!='/new-story' && 
                <Button leftIcon={<EditIcon />} variant={'link'} display={{base:'none', md: 'flex'}} onClick={()=>navigate('/new-story')}>
                  Write a post
                </Button>
            }

            <IconButton
              display={{base: 'flex', md: 'none'}}
              aria-label='Call Segun'
              size='lg'
              icon={<SearchIcon />}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem icon={<BiLogOut/>} color={'red'}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
