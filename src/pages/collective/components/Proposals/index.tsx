import ReturnButton from '~/components/ReturnButton'
import SectionDetail from '~/components/SectionDetail'
import { ROUTES } from '~/routes/pages-routes'

import SectionProposalsContent, {
  frontmatter as sectionProposalsContentFrontmatter,
} from '../../content/ideas/collectiveIdeas1.mdx'
import SectionProposalsContent2 from '../../content/ideas/collectiveIdeas2.mdx'
import SectionProposalsContent3 from '../../content/ideas/collectiveIdeas3.mdx'

const Proposals = () => {
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20">
      <ReturnButton path={ROUTES.COLLECTIVE.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionProposalsContentFrontmatter.title}
      </h1>
      <SectionDetail
        images={
          [sectionProposalsContentFrontmatter.image, undefined, undefined] ?? [
            '',
          ]
        }
        content={[
          <SectionProposalsContent key={1} />,
          <SectionProposalsContent2 key={2} />,
          <SectionProposalsContent3 key={3} />,
        ]}
        alts={
          [sectionProposalsContentFrontmatter.alt, undefined, undefined] ?? ['']
        }
      />
    </main>
  )
}

export default Proposals
