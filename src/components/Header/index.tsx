import Button from '../Button'

const Header = () => {
  return (
    <header className="flex justify-between text-center px-6 py-6">
      <p>test</p>
      <section className="flex justify-between text-center">
        <Button>O Coletivo</Button>
        <Button>História</Button>
        <Button>Apoie a usina</Button>
        <Button>Loja</Button>
        <Button>Nossos apoios</Button>
        <Button>Eventos</Button>
        <Button>Notícias</Button>
        <Button>Fale conosco</Button>
      </section>
    </header>
  )
}

export default Header
