import ReturnButton from '~/components/ReturnButton'
import SectionDetail, { SectionDetailProps } from '~/components/SectionDetail'
import { ROUTES } from '~/routes/pages-routes'

import SectionIncineratorContent, {
  frontmatter as sectionIncineratorContentFrontmatter,
} from '../../content/incinerator/historyIncinerator1.mdx'
import SectionIncineratorContent2 from '../../content/incinerator/historyIncinerator2.mdx'
import SectionIncineratorContent3, {
  frontmatter as sectionIncineratorContent3Frontmatter,
} from '../../content/incinerator/historyIncinerator3.mdx'
import SectionIncineratorContent4 from '../../content/incinerator/historyIncinerator4.mdx'

const Incinerator = () => {
  const content: Array<SectionDetailProps> = [
    {
      image: sectionIncineratorContentFrontmatter.image,
      content: <SectionIncineratorContent />,
      alt: sectionIncineratorContentFrontmatter.alt,
    },
    {
      content: <SectionIncineratorContent2 />,
    },
    {
      image: sectionIncineratorContent3Frontmatter.image,
      content: <SectionIncineratorContent3 />,
      alt: sectionIncineratorContentFrontmatter.alt,
    },
    {
      content: <SectionIncineratorContent4 />,
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20 md:mb-40">
      <ReturnButton path={ROUTES.HISTORY.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionIncineratorContentFrontmatter.title}
      </h1>
      <SectionDetail arr={content} />
    </main>
  )
}

export default Incinerator
