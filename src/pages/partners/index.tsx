import SectionDetail from '~/components/SectionDetail'

import SectionPartnersContent, {
  frontmatter as sectionPartnersContentFrontmatter
} from "./content/ourSupports1.mdx"
import SectionPartnersContent2, {
  frontmatter as sectionPartnersContentFrontmatter2
} from "./content/ourSupports2.mdx"
import SectionPartnersContent3, {
  frontmatter as sectionPartnersContentFrontmatter3
} from "./content/ourSupports3.mdx"
import SectionPartnersContent4, {
  frontmatter as sectionPartnersContentFrontmatter4
} from "./content/ourSupports4.mdx"
import SectionPartnersContent5, {
  frontmatter as sectionPartnersContentFrontmatter5
} from "./content/ourSupports5.mdx"
import SectionPartnersContent6, {
  frontmatter as sectionPartnersContentFrontmatter6
} from "./content/ourSupports6.mdx"
import SectionPartnersContent7, {
  frontmatter as sectionPartnersContentFrontmatter7
} from "./content/ourSupports7.mdx"
import SectionPartnersContent8, {
  frontmatter as sectionPartnersContentFrontmatter8
} from "./content/ourSupports8.mdx"
import SectionPartnersContent9, {
  frontmatter as sectionPartnersContentFrontmatter9
} from "./content/ourSupports9.mdx"
import SectionPartnersContent10, {
  frontmatter as sectionPartnersContentFrontmatter10
} from "./content/ourSupports10.mdx"
import SectionPartnersContent11, {
  frontmatter as sectionPartnersContentFrontmatter11
} from "./content/ourSupports11.mdx"
import SectionPartnersContent12, {
  frontmatter as sectionPartnersContentFrontmatter12
} from "./content/ourSupports12.mdx"
import SectionPartnersContent13, {
  frontmatter as sectionPartnersContentFrontmatter13
} from "./content/ourSupports13.mdx"

const PartnersPage = () => {
  return (
  <main className='inset-x-0 bottom-0 pt-20 pb-6'>
  <h1 className="flex justify-center text-xl font-black">{sectionPartnersContentFrontmatter.title}</h1>
  <SectionDetail
    images={[, , , , , , , , , , , , ] ?? ['']}
    content={[<SectionPartnersContent key={1}/>, <SectionPartnersContent2 key={2} />, <SectionPartnersContent3 key={3} />, <SectionPartnersContent4 key={4} />, <SectionPartnersContent5  key={5}/>, <SectionPartnersContent6 key={6} />, <SectionPartnersContent7 key={7} />, <SectionPartnersContent8 key={8}/>, <SectionPartnersContent9 key={9} />, <SectionPartnersContent10 key={10}/>, <SectionPartnersContent11 key={11} />, <SectionPartnersContent12 key={12} />, <SectionPartnersContent13 key={13} />]}
    alts={[sectionPartnersContentFrontmatter.alt, sectionPartnersContentFrontmatter2.alt, sectionPartnersContentFrontmatter3.alt, sectionPartnersContentFrontmatter4.alt, sectionPartnersContentFrontmatter5.alt, sectionPartnersContentFrontmatter6.alt, sectionPartnersContentFrontmatter7.alt, sectionPartnersContentFrontmatter8.alt, sectionPartnersContentFrontmatter9.alt, sectionPartnersContentFrontmatter10.alt, sectionPartnersContentFrontmatter11.alt, sectionPartnersContentFrontmatter12.alt, sectionPartnersContentFrontmatter13.alt] ?? ['']}
  />
  </main>
  )
}

export default PartnersPage
