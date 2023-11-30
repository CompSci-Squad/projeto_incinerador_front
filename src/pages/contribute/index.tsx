import Banner from '../../components/Banner'
import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'

const Contribute = () => {
  return (
    <main className="inset-x-0 pb-6 pt-16 md:mb-52">
      <Banner />
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="text-center text-xl font-bold">Apoie a Usina</h1>
      <section className="flex flex-col items-center justify-center gap-4 px-6 md:flex-row">
        <img
          src="/images/apoieAUsina.jpeg"
          alt=""
          className="h-24 w-24 rounded-2xl md:h-52 md:w-52"
        />
        <p>
          Nosso movimento é 100% a favor da população e meio ambiente, somos uma
          O.N.G. e pedimos que, se concorda com nosso movimento e apoia-o,
          contribua com nossa causa, por meio de doação de qualquer valor via
          Pix, informações abaixo. Agradecemos seu apoio! Ele nos capacita a
          continuarmos independentes
        </p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-center text-lg font-bold">
          Qualquer doação é bem vinda!!
        </h2>
        <img
          src="/images/qrCodePagamento.png"
          alt=""
          className="h-24 w-24 md:h-52 md:w-52"
        />
      </section>
    </main>
  )
}

export default Contribute
