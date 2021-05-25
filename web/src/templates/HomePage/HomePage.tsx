// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Section>
        <Heading as="h1">
          Greetings
        </Heading>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
