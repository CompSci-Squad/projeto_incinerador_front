import { ROUTES } from '../../routes/pages-routes'
import CollectiveSection from './components/CollectiveSection'
import OriginText, {
  frontmatter as originFrontmatter,
} from './content/collectiveSection1.mdx'
import ProposalsText, {
  frontmatter as proposalsFrontmatter,
} from './content/collectiveSection2.mdx'

const Collective = () => {
  return (
    <main>
      <div className="flex justify-center text-xl font-black">O Coletivo</div>
      <section className="flex justify-around py-6">
        <CollectiveSection
          title={originFrontmatter.title}
          path={ROUTES.COLLECTIVE.ORIGIN}
          image={originFrontmatter.image}
        >
          <OriginText />
        </CollectiveSection>
        <CollectiveSection
          title={proposalsFrontmatter.title}
          path={ROUTES.COLLECTIVE.PROPOSALS}
          image={proposalsFrontmatter.image}
        >
          <ProposalsText />
        </CollectiveSection>
      </section>
    </main>
  )
}

export default Collective
