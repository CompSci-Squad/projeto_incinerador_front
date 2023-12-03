import SectionDetail, { SectionDetailProps } from '~/components/SectionDetail'

import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'
import SectionPartnersContent, {
  frontmatter as sectionPartnersContentFrontmatter,
} from './content/ourSupports1.mdx'
import SectionPartnersContent2 from './content/ourSupports2.mdx'
import SectionPartnersContent3 from './content/ourSupports3.mdx'
import SectionPartnersContent4 from './content/ourSupports4.mdx'
import SectionPartnersContent5 from './content/ourSupports5.mdx'
import SectionPartnersContent6 from './content/ourSupports6.mdx'
import SectionPartnersContent7 from './content/ourSupports7.mdx'
import SectionPartnersContent8 from './content/ourSupports8.mdx'
import SectionPartnersContent9 from './content/ourSupports9.mdx'
import SectionPartnersContent10 from './content/ourSupports10.mdx'
import SectionPartnersContent11 from './content/ourSupports11.mdx'
import SectionPartnersContent12 from './content/ourSupports12.mdx'
import SectionPartnersContent13 from './content/ourSupports13.mdx'

const PartnersPage = () => {
  const content: Array<SectionDetailProps> = [
    {
      content: <SectionPartnersContent />,
    },
    {
      content: <SectionPartnersContent2 />,
    },
    {
      content: <SectionPartnersContent3 />,
    },
    {
      content: <SectionPartnersContent4 />,
    },
    {
      content: <SectionPartnersContent5 />,
    },
    {
      content: <SectionPartnersContent6 />,
    },
    {
      content: <SectionPartnersContent7 />,
    },
    {
      content: <SectionPartnersContent8 />,
    },
    {
      content: <SectionPartnersContent9 />,
    },
    {
      content: <SectionPartnersContent10 />,
    },
    {
      content: <SectionPartnersContent11 />,
    },
    {
      content: <SectionPartnersContent12 />,
    },
    {
      content: <SectionPartnersContent13 />,
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionPartnersContentFrontmatter.title}
      </h1>
      <SectionDetail className="mt-4 rounded-2xl bg-white" arr={content} />
    </main>
  )
}

export default PartnersPage
