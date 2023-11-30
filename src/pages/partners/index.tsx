import SectionDetail, { SectionDetailProps } from '~/components/SectionDetail'

import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'
import SectionPartnersContent, {
  frontmatter as sectionPartnersContentFrontmatter,
} from './content/ourSupports1.mdx'
import SectionPartnersContent2, {
  frontmatter as sectionPartnersContentFrontmatter2,
} from './content/ourSupports2.mdx'
import SectionPartnersContent3, {
  frontmatter as sectionPartnersContentFrontmatter3,
} from './content/ourSupports3.mdx'
import SectionPartnersContent4, {
  frontmatter as sectionPartnersContentFrontmatter4,
} from './content/ourSupports4.mdx'
import SectionPartnersContent5, {
  frontmatter as sectionPartnersContentFrontmatter5,
} from './content/ourSupports5.mdx'
import SectionPartnersContent6, {
  frontmatter as sectionPartnersContentFrontmatter6,
} from './content/ourSupports6.mdx'
import SectionPartnersContent7, {
  frontmatter as sectionPartnersContentFrontmatter7,
} from './content/ourSupports7.mdx'
import SectionPartnersContent8, {
  frontmatter as sectionPartnersContentFrontmatter8,
} from './content/ourSupports8.mdx'
import SectionPartnersContent9, {
  frontmatter as sectionPartnersContentFrontmatter9,
} from './content/ourSupports9.mdx'
import SectionPartnersContent10, {
  frontmatter as sectionPartnersContentFrontmatter10,
} from './content/ourSupports10.mdx'
import SectionPartnersContent11, {
  frontmatter as sectionPartnersContentFrontmatter11,
} from './content/ourSupports11.mdx'
import SectionPartnersContent12, {
  frontmatter as sectionPartnersContentFrontmatter12,
} from './content/ourSupports12.mdx'
import SectionPartnersContent13, {
  frontmatter as sectionPartnersContentFrontmatter13,
} from './content/ourSupports13.mdx'

const PartnersPage = () => {
  const content: Array<SectionDetailProps> = [
    {
      image: sectionPartnersContentFrontmatter.image,
      content: <SectionPartnersContent />,
      alt: sectionPartnersContentFrontmatter.alt,
    },
    {
      image: sectionPartnersContentFrontmatter2.image,
      content: <SectionPartnersContent2 />,
      alt: sectionPartnersContentFrontmatter2.alt,
    },
    {
      image: sectionPartnersContentFrontmatter3.image,
      content: <SectionPartnersContent3 />,
      alt: sectionPartnersContentFrontmatter3.alt,
    },
    {
      image: sectionPartnersContentFrontmatter4.image,
      content: <SectionPartnersContent4 />,
      alt: sectionPartnersContentFrontmatter4.alt,
    },
    {
      image: sectionPartnersContentFrontmatter5.image,
      content: <SectionPartnersContent5 />,
      alt: sectionPartnersContentFrontmatter5.alt,
    },
    {
      image: sectionPartnersContentFrontmatter6.image,
      content: <SectionPartnersContent6 />,
      alt: sectionPartnersContentFrontmatter6.alt,
    },
    {
      image: sectionPartnersContentFrontmatter7.image,
      content: <SectionPartnersContent7 />,
      alt: sectionPartnersContentFrontmatter7.alt,
    },
    {
      image: sectionPartnersContentFrontmatter8.image,
      content: <SectionPartnersContent8 />,
      alt: sectionPartnersContentFrontmatter8.alt,
    },
    {
      image: sectionPartnersContentFrontmatter9.image,
      content: <SectionPartnersContent9 />,
      alt: sectionPartnersContentFrontmatter9.alt,
    },
    {
      image: sectionPartnersContentFrontmatter10.alt,
      content: <SectionPartnersContent10 />,
      alt: sectionPartnersContentFrontmatter10.alt,
    },
    {
      image: sectionPartnersContentFrontmatter11.image,
      content: <SectionPartnersContent11 />,
      alt: sectionPartnersContentFrontmatter11.alt,
    },
    {
      image: sectionPartnersContentFrontmatter12.image,
      content: <SectionPartnersContent12 />,
      alt: sectionPartnersContentFrontmatter12.alt,
    },
    {
      image: sectionPartnersContentFrontmatter13.image,
      content: <SectionPartnersContent13 />,
      alt: sectionPartnersContentFrontmatter13.alt,
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionPartnersContentFrontmatter.title}
      </h1>
      <SectionDetail arr={content} />
    </main>
  )
}

export default PartnersPage
