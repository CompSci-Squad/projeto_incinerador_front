interface SectionDetailProps {
  images: Array<string>
  content: Array<React.ReactNode>
}

const SectionDetail: React.FC<SectionDetailProps> = ({ content, images }) => {
  return (
    <section>
      <img src={images[0]} alt="" />
      {images[1] ? (
        <div>
          <img src={images[1]} alt="" />
        </div>
      ) : (
        <p>texto</p>
      )}
      {content[1]}
    </section>
  )
}

export default SectionDetail
