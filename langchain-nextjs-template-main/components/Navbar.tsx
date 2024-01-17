"use client";

import { Button, Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <Flex
        w={"100%"}
        boxShadow={"md"}
        p={4}
        as="header"
        position="fixed"
        shadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
        backdropFilter={'blur(8.2px)'}
        alignItems={'center'}>
        <Heading
          size={"md"}
          fontWeight={500}
          onClick={() => {
          }}>
          <Link href="https://paidplanet.com">
            <Image height={8} src='/images/logo.png' alt='PaidPlanet'></Image>
          </Link>
        </Heading>
        <Spacer />
        <Button mx={4}>
          <Link href='/' _hover={{ textDecoration: "none" }}>
            Chat with Wallace
          </Link>
        </Button>
        <Button mx={4}>
          <Link href='/retrieval_agents' _hover={{ textDecoration: "none" }}>
            Methodologies Overview
          </Link>
        </Button>
        <Button mx={4}>
          <Link href='/profile' _hover={{ textDecoration: "none" }}>
            Profile
          </Link>
        </Button>
      </Flex >
    </>
  );
}