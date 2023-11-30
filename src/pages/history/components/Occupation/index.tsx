import ReturnButton from '~/components/ReturnButton'
import SectionDetail, { SectionDetailProps } from '~/components/SectionDetail'
import { ROUTES } from '~/routes/pages-routes'

import SectionOccupationContent, {
  frontmatter as sectionOccupationContentFrontmatter,
} from '../../content/ocupation/historyOccupation.mdx'
import SectionOccupationContent2 from '../../content/ocupation/historyOccupation2.mdx'

const Occupation = () => {
  const content: Array<SectionDetailProps> = [
    {
      image: sectionOccupationContentFrontmatter.image,
      content: <SectionOccupationContent />,
      alt: sectionOccupationContentFrontmatter.alt,
    },
    {
      content: <SectionOccupationContent2 />,
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20 md:mb-40">
      <ReturnButton path={ROUTES.HISTORY.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionOccupationContentFrontmatter.title}
      </h1>
      <SectionDetail arr={content} />
    </main>
  )
}

export default Occupation
