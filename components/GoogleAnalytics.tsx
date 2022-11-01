import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

const GA_TRACKING_ID = 'G-K2NP44GKV1'

export default () => {
  const router = useRouter()
  console.log('router', router)

  const script = useMemo(() => `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_path: window.location.pathname,
    });
  `, [])

  useEffect(() => {
    const handleRouteChange = url => {
      if (router == null || router.events == null) return

      if ('gtag' in window && typeof window.gtag === 'function') {
        window.gtag('config', GA_TRACKING_ID, { page_path: url })
      } else {
        console.error('window.gtag is undefined or not function!')
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router])

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id='gtag-init' strategy='afterInteractive' dangerouslySetInnerHTML={{__html: script}} />
    </>
  )
}
