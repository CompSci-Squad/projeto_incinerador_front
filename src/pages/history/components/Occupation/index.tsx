import ReturnButton from '~/components/ReturnButton'
import SectionDetail from '~/components/SectionDetail'
import { ROUTES } from '~/routes/pages-routes'

import SectionOccupationContent, {
  frontmatter as sectionOccupationContentFrontmatter,
} from '../../content/ocupation/historyOccupation.mdx'
import SectionOccupationContent2, {
  frontmatter as sectionOccupationContent2Frontmatter,
} from '../../content/ocupation/historyOccupation2.mdx'

const Occupation = () => {
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20">
      <ReturnButton path={ROUTES.HISTORY.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionOccupationContentFrontmatter.title}
      </h1>
      <SectionDetail
        images={
          [
            sectionOccupationContentFrontmatter.image,
            sectionOccupationContent2Frontmatter.image,
          ] ?? ['']
        }
        content={[
          <SectionOccupationContent key={1} />,
          <SectionOccupationContent2 key={2} />,
        ]}
        alts={
          [
            sectionOccupationContentFrontmatter.alt,
            sectionOccupationContent2Frontmatter.alt,
          ] ?? ['']
        }
      />
    </main>
  )
}

export default Occupation
