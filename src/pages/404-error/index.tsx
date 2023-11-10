import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../routes/pages-routes'

const Erro404 = () => {
  return (
    <main>
      <div className="flex p-6">
        <Link to={ROUTES.HOME} className="rounded-full bg-eco_green p-4">
          <IoIosArrowBack className=" text-lg text-eco_white" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg">
          Clique no botão acima para retornar à pagina principal
        </p>
        <img src="https://http.cat/images/404.jpg" alt="" />
      </div>
    </main>
  )
}

export default Erro404
