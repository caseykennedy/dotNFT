// CheckoutIp

// ___________________________________________________________________

import * as React from 'react'
import Script from 'react-inline-script'

// ___________________________________________________________________

const CheckoutIp: React.FC = () => (
  <Script type="text/javascript" id="enc-checkout-embed">
    {(function () {
      if (typeof window !== 'undefined') {
        function async_load() {
          const s = document.createElement('script')
          s.type = 'text/javascript'
          s.async = true
          const theUrl =
            'https://esb.encircapartners.com/api/encirca/60748fe315b6d24cbeead338/widgets/checkout'
          s.src = `${theUrl}${
            theUrl.indexOf('?') >= 0 ? '&' : '?'
          }ref=${encodeURIComponent(window.location.href)}`
          setTimeout(() => {
            const embedder = document.getElementById('enc-checkout-embed')
            if (embedder) {
              embedder.parentNode.insertBefore(s, embedder)
            }
          }, 1)
        }
        async_load()
      }
    })()}
  </Script>
)

export default CheckoutIp
