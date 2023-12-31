import { twMerge } from 'tailwind-merge'

interface SectionDetailsArr {
  arr: SectionDetailProps[]
  className?: string
}

export interface SectionDetailProps {
  image?: string
  content: React.ReactNode
  alt?: string
}

const SectionDetail: React.FC<SectionDetailsArr> = ({ arr, className }) => {
  const addImageFallback = (event: { currentTarget: { src: string } }) => {
    event.currentTarget.src = '/images/cachorro_arabe.jpeg'
  }
  return (
    <main className="flex flex-wrap p-4 pb-0 md:mb-40">
      {arr.map(({ image, alt, content }) =>
        image ? (
          <section
            key={alt}
            className={twMerge(
              `flex flex-col items-center justify-center p-4 md:flex-row`,
              className,
            )}
          >
            <img
              className="h-24 w-24 rounded-2xl md:h-52 md:w-52"
              src={image}
              alt={alt}
              onError={addImageFallback}
            />
            <div className="ml-4">{content}</div>
          </section>
        ) : (
          <section
            key={alt}
            className={twMerge(
              `flex flex-col items-center justify-center p-4 md:flex-row`,
              className,
            )}
          >
            <div className="ml-4">{content}</div>
          </section>
        ),
      )}
    </main>
  )
}

export default SectionDetail
