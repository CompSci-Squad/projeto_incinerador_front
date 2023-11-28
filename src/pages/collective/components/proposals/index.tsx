import SectionDetail from '~/components/SectionDetail'
import ReturnButton from '~/components/ReturnButton'
import { ROUTES } from '~/routes/pages-routes'

import SectionProposalsContent, {
  frontmatter as sectionProposalsContentFrontmatter
} from "../../content/ideas/collectiveIdeas1.mdx"
import SectionProposalsContent2, {
  frontmatter as sectionProposalsContentFrontmatter2
} from "../../content/ideas/collectiveIdeas2.mdx"
import SectionProposalsContent3, {
  frontmatter as sectionProposalsContentFrontmatter3
} from "../../content/ideas/collectiveIdeas3.mdx"

const Proposals = () => {
  return (
    <main className='inset-x-0 bottom-0 pt-20 pb-6'>
      <ReturnButton path={ROUTES.COLLECTIVE.HOME} />
      <h1 className="flex justify-center text-xl font-black">{sectionProposalsContentFrontmatter.title}</h1>
      <SectionDetail
      images={[sectionProposalsContentFrontmatter.image, ,] ?? ['']}
      content={[<SectionProposalsContent key={1}/>, <SectionProposalsContent2 key={2}/>, <SectionProposalsContent3 key={3}/>]}
      alts={[sectionProposalsContentFrontmatter.alt, ,] ?? ['']}
      />
  
    </main>
  )
}

export default Proposals
