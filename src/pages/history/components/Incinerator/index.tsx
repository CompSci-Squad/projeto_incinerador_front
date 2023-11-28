import SectionDetail from '~/components/SectionDetail'
import ReturnButton from '~/components/ReturnButton'
import { ROUTES } from '~/routes/pages-routes'

import SectionIncineratorContent, {
  frontmatter as sectionIncineratorContentFrontmatter,
} from '../../content/incinerator/historyIncinerator1.mdx'
import SectionIncineratorContent2, {
  frontmatter as sectionIncineratorContent2Frontmatter,
} from '../../content/incinerator/historyIncinerator2.mdx'
import SectionIncineratorContent3, {
  frontmatter as sectionIncineratorContent3Frontmatter,
} from "../../content/incinerator/historyIncinerator3.mdx"
import SectionIncineratorContent4, {
  frontmatter as sectionIncineratorContent4Frontmatter,
} from "../../content/incinerator/historyIncinerator4.mdx"

const Incinerator = () => {
  return (
    <main className='inset-x-0 bottom-0 pt-20 pb-6'>
    <ReturnButton path={ROUTES.HISTORY.HOME}/>
      <h1 className="flex justify-center text-xl font-black">{sectionIncineratorContentFrontmatter.title}</h1>
      <SectionDetail
        images={[sectionIncineratorContentFrontmatter.image, ,sectionIncineratorContent3Frontmatter.image] ?? ['']}
        content={[<SectionIncineratorContent key={1} />,<SectionIncineratorContent2 key={2}/> ,<SectionIncineratorContent3 key={3}/>, <SectionIncineratorContent4 key={4}/>]}
        alts={[sectionIncineratorContentFrontmatter.alt, ,sectionIncineratorContent3Frontmatter] ?? ['']}
      />
    </main>
  )
}

export default Incinerator
