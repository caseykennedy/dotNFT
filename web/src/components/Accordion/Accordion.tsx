// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Text } from 'theme-ui'
import Icon from '../Icons'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  active?: boolean
  children: React.ReactNode
  title: string
  color?: string
  chevronColor?: string
  chevronWidth?: string
  borderColor?: string
  borderTop?: boolean
  colorActive?: string
  bg?: string
  fontSize?: number | number[] | string
  subTitle?: string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
}

// ___________________________________________________________________

const Accordion: React.FC<Props> = ({
  active,
  bg,
  borderColor,
  borderTop,
  chevronColor,
  chevronWidth,
  children,
  color,
  colorActive,
  fontSize,
  subTitle,
  pt,
  pb,
  pr,
  pl,
  title,
}) => {
  // Reference the accordion content height
  const refContent = useRef<HTMLDivElement>(null)

  let activeState
  let heightState
  let rotateState

  if (!active) {
    activeState = ''
    heightState = '0px'
    rotateState = 'accordion-icon'
  } else {
    activeState = 'active'
    heightState = '100%'
    rotateState = 'accordion-icon rotate'
  }

  // Accordion hooks
  const [setActive, setActiveState] = useState(activeState)
  const [setHeight, setHeightState] = useState(heightState)
  const [setRotate, setRotateState] = useState(rotateState)

  // setHeightState(
  //   setActive === 'active' ? '0px' : `${refContent.current.scrollHeight}px`
  // )
  // setRotateState(
  //   setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
  // )

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    if (null !== refContent) {
      setHeightState(
        setActive === 'active' ? '0px' : `${refContent.current.scrollHeight}px`
      )
    }
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <S.AccordionContainer borderColor={borderColor} borderTop={borderTop}>
      <S.AccordionInner>
        <S.AccordionToggle
          className={setActive}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
          bg={bg}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          <S.AccordionToggleInner width={1}>
            <Text
              className="title"
              sx={{ fontSize: `${fontSize}`, width: '100%' }}
            >
              {title}
            </Text>
            {subTitle && (
              <Text as="span" mb={0}>
                {subTitle}
              </Text>
            )}
          </S.AccordionToggleInner>
        </S.AccordionToggle>
        <S.AccordionContent
          ref={refContent}
          style={{ maxHeight: `${setHeight}` }}
        >
          {children}
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion

// ___________________________________________________________________

const defaultProps = {
  pt: [5],
  pb: [5],
  pr: theme.gutter.axis,
  pl: theme.gutter.axis,
  title: 'title',
  color: theme.colors.text,
  colorActive: theme.colors.white,
  fontSize: [4, 5],
  chevronColor: theme.colors.text,
  chevronWidth: theme.space[3],
  borderColor: theme.colors.text,
  borderTop: false,
}

Accordion.defaultProps = defaultProps
