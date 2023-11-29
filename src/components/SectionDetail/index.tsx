interface SectionDetailProps {
  images: Array<string | undefined>
  content: Array<React.ReactNode>
  alts: Array<string | undefined>
}

const SectionDetail: React.FC<SectionDetailProps> = ({
  content,
  images,
  alts,
}) => {
  return (
    <main className="flex flex-wrap p-4 md:mb-40">
      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        <img className="h-52 w-52" src={images[0]} alt={alts[0]} />
        <div className="ml-4">{content[0]}</div>
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[1] ? <img className="w-52" src={images[1]} /> : undefined}
        {content[1] ? <div className="ml-4">{content[1]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[2] ? <img className="w-52" src={images[2]} /> : undefined}
        {content[2] ? <div className="ml-4">{content[2]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[3] ? <img className="w-52" src={images[3]} /> : undefined}
        {content[3] ? <div className="ml-4">{content[3]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[4] ? <img className="w-52" src={images[4]} /> : undefined}
        {content[4] ? <div className="ml-4">{content[4]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[5] ? <img className="w-52" src={images[5]} /> : undefined}
        {content[5] ? <div className="ml-4">{content[5]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[6] ? <img className="w-52" src={images[6]} /> : undefined}
        {content[6] ? <div className="ml-4">{content[6]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[7] ? <img className="w-52" src={images[7]} /> : undefined}
        {content[7] ? <div className="ml-4">{content[7]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[8] ? <img className="w-52" src={images[8]} /> : undefined}
        {content[8] ? <div className="ml-4">{content[8]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[9] ? <img className="w-52" src={images[9]} /> : undefined}
        {content[9] ? <div className="ml-4">{content[9]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[10] ? <img className="w-52" src={images[10]} /> : undefined}
        {content[10] ? <div className="ml-4">{content[10]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[11] ? <img className="w-52" src={images[11]} /> : undefined}
        {content[11] ? <div className="ml-4">{content[11]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[12] ? <img className="w-52" src={images[12]} /> : undefined}
        {content[12] ? <div className="ml-4">{content[12]}</div> : undefined}
      </section>

      <section className="flex flex-col items-center justify-center p-4 md:flex-row">
        {images[13] ? <img className="w-52" src={images[13]} /> : undefined}
        {content[13] ? <div className="ml-4">{content[13]}</div> : undefined}
      </section>
    </main>
  )
}

export default SectionDetail
