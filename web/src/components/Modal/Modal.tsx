// Modal:

// ___________________________________________________________________

import React, { useState } from 'react'
import { default as ReactModal } from 'react-responsive-modal'
import { transparentize } from 'polished'

import theme from '../../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
  open: boolean
  close: () => any
} & typeof defaultProps

const defaultProps = {}

const Modal: React.FC<ModalProps> = ({ children, open, close }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <ReactModal
      open={open}
      onClose={close}
      styles={!isDark ? modalStylesLight : modalStylesDark }
      focusTrapped={false}
      center={true}
      showCloseIcon={false}
    >
      {children}
    </ReactModal>
  )
}

export default Modal

// ___________________________________________________________________

Modal.defaultProps = defaultProps

const modalStylesLight = {
  overlay: {
    background: theme.colors.muted
  },
  modal: {
    background: theme.colors.muted,
    boxShadow: 'none',
    margin: '0',
    padding: `0`,
    height: '100%',
    maxWidth: '100%',
    width: '100%'
  }
}

const modalStylesDark = {
  overlay: {
    background: theme.colors.modes.dark.muted
  },
  modal: {
    background: theme.colors.modes.dark.muted,
    boxShadow: 'none',
    margin: '0',
    padding: `0`,
    height: '100%',
    maxWidth: '100%',
    width: '100%'
  }
}