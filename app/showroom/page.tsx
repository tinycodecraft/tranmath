import { Container } from '../../layouts/container'
import { PageWrapper } from '../../layouts/page-wrapper'
import { ImageItemProps } from '../../components/props'
import { CarouselProvider } from '../../context/CarouselContext'
import RollImage from '../../components/rollImage'

const images: ImageItemProps[] = [
  // "https://source.unsplash.com/random/1080x720?pinetree&q=100",
  // "https://source.unsplash.com/random/1080x720?forest&q=100",
  // "https://source.unsplash.com/random/1080x720?mountain&q=100",
  {
    href: 'https://images.unsplash.com/photo-1651761129862-13beec5afece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'what1',
  },
  {
    href: 'https://images.unsplash.com/photo-1580184482029-94fdccd86f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'what2',
  },
  {
    href: 'https://images.unsplash.com/photo-1548022401-6b11ed578cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'what3',
  },
]

export default function Home() {
  return (
    <PageWrapper>
      <Container className='h-full overflow-y-auto' >
        <CarouselProvider len={images.length}>
          <RollImage links={images}  />
        </CarouselProvider>
      </Container>
    </PageWrapper>
  )
}
