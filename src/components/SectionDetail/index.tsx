interface SectionDetailProps {
  images: Array<string | undefined>
  content: Array<React.ReactNode>
  alts: Array<string | undefined>
}

const SectionDetail: React.FC<SectionDetailProps> = ({ content, images, alts}) => {
  return (
    <main>
      <section className="flex items-center p-4">
        <img className="w-52 h-52" src={images[0]} alt={alts[0]} />
        <div className="ml-4">
          {content[0]}
        </div>
      </section>

      <section className="flex items-center p-4">
          {images [1] ? (
            <img className='w-52' src={images[1]}/> 
            ) : (
              <p></p>
            )}
          {content[1] ? (
            <div className="ml-4">
              {content[1]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

      <section className="flex items-center p-4">
          {images [2] ? (
            <img className='w-52' src={images[2]}/> 
            ) : (
              <p></p>
            )}
          {content[2] ? (
            <div className="ml-4">
              {content[2]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

        <section className="flex items-center p-4">
          {images [3] ? (
            <img className='w-52' src={images[3]}/> 
            ) : (
              <p></p>
            )}
          {content[3] ? (
            <div className="ml-4">
              {content[3]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

        <section className="flex items-center p-4">
          {images [4] ? (
            <img className='w-52' src={images[4]}/> 
            ) : (
              <p></p>
            )}
          {content[4] ? (
            <div className="ml-4">
              {content[4]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

        <section className="flex items-center p-4">
          {images [5] ? (
            <img className='w-52' src={images[5]}/> 
            ) : (
              <p></p>
            )}
          {content[5] ? (
            <div className="ml-4">
              {content[5]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

        <section className="flex items-center p-4">
          {images [6] ? (
            <img className='w-52' src={images[6]}/> 
            ) : (
              <p></p>
            )}
          {content[6] ? (
            <div className="ml-4">
              {content[6]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

        <section className="flex items-center p-4">
          {images [7] ? (
            <img className='w-52' src={images[7]}/> 
            ) : (
              <p></p>
            )}
          {content[7] ? (
            <div className="ml-4">
              {content[7]}
            </div>
            ) : (
              <p></p>
            )}
        </section>

        <section className="flex items-center p-4">
          {images [8] ? (
            <img className='w-52' src={images[8]}/> 
            ) : (
              <p></p>
            )}
          {content[8] ? (
            <div className="ml-4">
              {content[8]}
            </div>
            ) : (
              <p></p>
            )}
        </section>
      </main>
    
  )
}

export default SectionDetail
