import Banner from '~/components/Banner'
import Colective_Sec from '~/components/Colective_Sec'
import Test from '~/content/index.mdx'

const Home = () => {
  return (
    <main className="h-screen">
      <Banner />
      <h1>It works and you found me!</h1>
      <Test />
      <Colective_Sec />
    </main>
  )
}

export default Home
