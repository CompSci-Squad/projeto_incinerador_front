const Banner = () => {
  return (
    <div className="collapse rounded-none bg-eco_blue">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium text-eco_white">
        Assine nosso abaixo assinado clicando nesse banner
      </div>
      <div className="collapse-content">
        <a
          href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/"
          target="_blank"
          className="link text-eco_white"
        >
          Eu apoio que o Incinerador Vergueiro se torne um centro cultural e
          ambiental
        </a>
      </div>
    </div>
  )
}

export default Banner
