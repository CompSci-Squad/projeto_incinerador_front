import ReturnButton from '~/components/ReturnButton'
import SectionDetail, { SectionDetailProps } from '~/components/SectionDetail'
import { ROUTES } from '~/routes/pages-routes'

import SectionOriginContent, {
  frontmatter as sectionOriginContentFrontmatter,
} from '../../content/grow/collectiveGrow1.mdx'
import SectionOriginContent2 from '../../content/grow/collectiveGrow2.mdx'
import SectionOriginContent3 from '../../content/grow/collectiveGrow3.mdx'
import SectionOriginContent4 from '../../content/grow/collectiveGrow4.mdx'
import SectionOriginContent5 from '../../content/grow/collectiveGrow5.mdx'
import SectionOriginContent6, {
  frontmatter as sectionOriginContent6Frontmatter,
} from '../../content/grow/collectiveGrow6.mdx'
import SectionOriginContent7 from '../../content/grow/collectiveGrow7.mdx'
import SectionOriginContent8 from '../../content/grow/collectiveGrow8.mdx'

const Origin = () => {
  const content: Array<SectionDetailProps> = [
    {
      image: sectionOriginContentFrontmatter.image,
      content: <SectionOriginContent />,
      alt: sectionOriginContentFrontmatter.alt,
    },
    {
      content: <SectionOriginContent2 />,
    },
    {
      content: <SectionOriginContent3 />,
    },
    {
      content: <SectionOriginContent4 />,
    },
    {
      content: <SectionOriginContent5 />,
    },
    {
      image: sectionOriginContent6Frontmatter.image,
      content: <SectionOriginContent6 />,
      alt: sectionOriginContent6Frontmatter.alt,
    },
    {
      content: <SectionOriginContent7 />,
    },
    {
      content: <SectionOriginContent8 />,
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pt-20">
      <ReturnButton path={ROUTES.COLLECTIVE.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionOriginContentFrontmatter.title}
      </h1>
      <SectionDetail arr={content} />
    </main>
  )
}

export default Origin
