/** @jsxImportSource @emotion/react */
import { useMediaQuery } from 'react-responsive'
import Card from '../Card'

interface CardDetails {
  title: string
  description: string
}

interface Props {
  data: CardDetails[]
}

const CardGrid = ({ data }: Props) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  return (
    <section
      css={{
        maxWidth: '78rem',
        height: `${isDesktop ? '557px' : '100%'}`,
        margin: '50px auto',
        padding: ' 0 24px',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: `${isDesktop ? 'row' : 'column'}`,
          justifyContent: 'space-between',
        }}
      >
        <div css={{ height: '175px', width: `${isDesktop ? '49%' : '100%'}`, margin: '10px 0' }}>
          <Card title={data[0].title} description={data[0].description} />
        </div>
        <div css={{ height: '175px', width: `${isDesktop ? '24%' : '100%'}`, margin: '10px 0' }}>
          <Card title={data[1].title} description={data[1].description} />
        </div>
        <div css={{ height: '175px', width: `${isDesktop ? '24%' : '100%'}`, margin: '10px 0' }}>
          <Card title={data[2].title} description={data[2].description} />
        </div>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: `${isDesktop ? 'row' : 'column'}`,
          justifyContent: 'space-between',
        }}
      >
        <div
          css={{
            height: `${isDesktop ? '380px' : '175px'}`,
            width: `${isDesktop ? '24%' : '100%'}`,
            margin: '10px 0',
          }}
        >
          <Card title={data[3].title} description={data[3].description} />
        </div>
        <div css={{ width: `${isDesktop ? '24%' : '100%'}` }}>
          <div css={{ height: `${isDesktop ? '185px' : '175px'}`, width: '100%', margin: '10px 0' }}>
            <Card title={data[4].title} description={data[4].description} />
          </div>
          <div css={{ height: `${isDesktop ? '185px' : '175px'}`, width: '100%', margin: '10px 0' }}>
            <Card title={data[5].title} description={data[5].description} />
          </div>
        </div>
        <div
          css={{
            height: `${isDesktop ? '380px' : '175px'}`,
            width: `${isDesktop ? '24%' : '100%'}`,
            margin: '10px 0',
          }}
        >
          <Card title={data[6].title} description={data[6].description} />
        </div>
        <div
          css={{
            height: `${isDesktop ? '380px' : '175px'}`,
            width: `${isDesktop ? '24%' : '100%'}`,
            margin: '10px 0',
          }}
        >
          <Card title={data[7].title} description={data[7].description} />
        </div>
      </div>
    </section>
  )
}

export default CardGrid
