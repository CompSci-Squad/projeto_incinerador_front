import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'

const Erro404 = () => {
  return (
    <main>
      <ReturnButton path={ROUTES.HOME} />
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
