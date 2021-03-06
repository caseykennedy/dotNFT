// HomePage:

// ___________________________________________________________________

import * as React from 'react'
import Script from 'react-inline-script'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import SearchIp from '../../components/SearchIp'

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

        <SearchIp />

        <Heading as="h2" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Heading as="h3" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Heading as="h4" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Heading as="h5" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>
        <Heading as="h6">
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          domain layer.
        </Heading>

        <Flex mt={6}>
          <Button mr={2} variant="primary">
            Apply
          </Button>
          <Button mr={2} bg="secondary" color="black" variant="primary">
            Apply
          </Button>
          <Button variant="secondary">Apply</Button>
        </Flex>
      </Section>

      <Section bg="text" color="gray">
        <Heading as="h1" mb={2}>
          Meet the{' '}
          <Text as="span" sx={{ fontFamily: `display` }}>
            .nft
          </Text>{' '}
          <Text as="span" sx={{ fontStyle: `italic` }}>
            domain
          </Text>{' '}
          layer.
        </Heading>
        <Text as="p" mb={6}>
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
          Create and ⛓ link unique .nft domains accross blockchains and the web.
        </Text>
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
      </Section>
    </S.HomePage>
  )
}

export default HomePage
