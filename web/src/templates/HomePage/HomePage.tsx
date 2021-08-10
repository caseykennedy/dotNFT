// HomePage:

// ___________________________________________________________________

import React, { useEffect, useState } from 'react'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import SearchIp from '../../components/SearchIp'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const [checkWidget, setCheckWidget] = useState('')
  useEffect(() => {
    setCheckWidget(<SearchIp />)
  }, [])
  // useEffect(() => {
  //   const script = document.createElement('script')

  //   const theUrl =
  //     'https://esb.encircapartners.com/api/encirca/60748fe315b6d24cbeead338/widgets/checkDomain'

  //   script.src = `${theUrl}${
  //     theUrl.indexOf('?') >= 0 ? '&' : '?'
  //   }ref=${encodeURIComponent(window.location.href)}`
  //   script.async = true

  //   document.body.appendChild(script)

  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // }, [])
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

        <Box mb={6}>{checkWidget}</Box>

        <Flex mb={6}>
          <Button mr={2} variant="primary">
            Apply
          </Button>
          <Button mr={2} bg="secondary" color="black" variant="primary">
            Apply
          </Button>
          <Button variant="secondary">Apply</Button>
        </Flex>

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
