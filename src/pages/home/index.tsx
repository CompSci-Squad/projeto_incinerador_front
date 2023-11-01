import Banner from '~/components/Banner'
import Test from '~/content/index.mdx'

const Home = () => {
  return (
    <main className="h-screen">
      <Banner />
      <h1>It works and you found me!</h1>
      <Test />
    </main>
  )
}

export default Home
