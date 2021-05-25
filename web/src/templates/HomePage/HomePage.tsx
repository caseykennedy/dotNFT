// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Section>
        <Heading as="h1" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Text as="p" mb={6}>
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
        </Text>

        <Heading as="h2" mb={2}>
          Greetings
        </Heading>
        <Heading as="h3" mb={2}>
          Greetings
        </Heading>
        <Heading as="h4" mb={2}>
          Greetings
        </Heading>
        <Heading as="h5" mb={2}>
          Greetings
        </Heading>
        <Heading as="h6">Greetings</Heading>
      </Section>

      <Section bg="text" color="gray">
        <Heading as="h1" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Text as="p" mb={6}>
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
        </Text>

        <Heading as="h2" mb={2}>
          Greetings
        </Heading>
        <Heading as="h3" mb={2}>
          Greetings
        </Heading>
        <Heading as="h4" mb={2}>
          Greetings
        </Heading>
        <Heading as="h5" mb={2}>
          Greetings
        </Heading>
        <Heading as="h6">Greetings</Heading>
      </Section>

      <Section bg="secondary">
        <Heading as="h1" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Text as="p" mb={6}>
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
        </Text>

        <Heading as="h2" mb={2}>
          Greetings
        </Heading>
        <Heading as="h3" mb={2}>
          Greetings
        </Heading>
        <Heading as="h4" mb={2}>
          Greetings
        </Heading>
        <Heading as="h5" mb={2}>
          Greetings
        </Heading>
        <Heading as="h6">Greetings</Heading>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
