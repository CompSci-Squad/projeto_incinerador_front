import ReturnButton from '~/components/ReturnButton'
import SectionDetail from '~/components/SectionDetail'
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
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20">
      <ReturnButton path={ROUTES.COLLECTIVE.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionOriginContentFrontmatter.title}
      </h1>
      <SectionDetail
        images={
          [
            sectionOriginContentFrontmatter.image,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            sectionOriginContent6Frontmatter.image,
            undefined,
          ] ?? ['']
        }
        content={[
          <SectionOriginContent key={1} />,
          <SectionOriginContent2 key={2} />,
          <SectionOriginContent3 key={3} />,
          <SectionOriginContent4 key={4} />,
          <SectionOriginContent5 key={5} />,
          <SectionOriginContent6 key={6} />,
          <SectionOriginContent7 key={7} />,
          <SectionOriginContent8 key={8} />,
        ]}
        alts={
          [
            sectionOriginContentFrontmatter.alt,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            sectionOriginContent6Frontmatter.alt,
            undefined,
          ] ?? ['']
        }
      />
    </main>
  )
}

export default Origin
