// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import Typist from 'react-typist'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text, useColorMode } from 'theme-ui'

// Components
import Symbol from '../Symbol'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header px={theme.gutter.axis}>
        <Flex className="header-inner" py={4}>
          <Link to="/" className="logo" aria-label="dotNFT, back to home">
            <S.Logo onClick={() => setNavOpen(false)}>
              {/* <Box className="symbol">
                <Symbol fill={theme.colors.black} />
              </Box> */}
              <Typist cursor={cursorProps}>
                <Text
                  as="p"
                  color="text"
                  className="wordmark"
                  aria-label="The Handshake Foundation"
                >
                  dotNFT
                </Text>
              </Typist>
            </S.Logo>
          </Link>
        </Flex>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header

const cursorProps = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}
