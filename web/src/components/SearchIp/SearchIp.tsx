// SearchIp

// ___________________________________________________________________

import * as React from 'react'
import Script from 'react-inline-script'
import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const SearchIp = () => (
  <script type="text/javascript" id="enc-checkDomain-embed">
    {(() => {
      if (typeof window !== 'undefined') {
        function async_load() {
          const s = document.createElement('script')
          s.type = 'text/javascript'
          s.async = true
          const theUrl =
            'https://esb.encircapartners.com/api/encirca/60748fe315b6d24cbeead338/widgets/checkDomain'
          s.src = `${theUrl}${
            theUrl.indexOf('?') >= 0 ? '&' : '?'
          }ref=${encodeURIComponent(window.location.href)}`
          setTimeout(() => {
            const embedder = document.getElementById('enc-checkDomain-embed')
            if (embedder) {
              embedder.parentNode.insertBefore(s, embedder)
            }
          }, 1)
        }
        async_load()
      }
    })()}
  </script>
)

export default SearchIp
