import Head from 'next/head'
import favicon from '@/assets/favicon.png'

interface HeadProps {
  title?: string
  contentDescription?: string
  contentImage?: string
}

function NextHead({ title, contentDescription, contentImage }: HeadProps) {
  return (
    <Head>
      <link rel="icon" href={favicon.src} />

      {contentDescription && (
        <>
          <meta name="description" content={contentDescription} key="desc" />
          <meta property="og:description" content={contentDescription} />
        </>
      )}
      {contentImage && (
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      )}
      <title>{title ?? 'Coffee Delivery'}</title>
    </Head>
  )
}
export { NextHead }
