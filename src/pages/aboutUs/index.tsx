import { FaLinkedin } from 'react-icons/fa6'

import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'
import DevText, { frontmatter as devfrontmatter } from './content/devs.mdx'

const AboutUs = () => {
  const linkedInLinks = [
    {
      name: 'Douglas Aldred',
      link: 'https://www.linkedin.com/in/douglas-aldred',
    },
    {
      name: 'Gustavo Affonso',
      link: 'https://www.linkedin.com/in/gustavo-affonso-01a156272',
    },
    {
      name: 'Henri Mello',
      link: 'https://www.linkedin.com/in/henri-fran%C3%A7a-garcia-mello-a96619254/',
    },
    {
      name: 'Rafael Lopes',
      link: 'https://www.linkedin.com/in/rafael-pedro-lopes-a596752a1/',
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 bg-eco_white pt-16">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Sobre os Devs</h1>
      <section className="mx-4 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 md:flex-row">
        <img
          className="h-32 w-44  rounded-2xl md:h-80 md:w-96"
          src={devfrontmatter.image}
          alt={devfrontmatter.alt}
        />
        <div className="flex items-center justify-center md:pl-6">
          <DevText />
        </div>
      </section>
      <section className="mx-4 my-6 flex items-center justify-center rounded-2xl bg-white py-6">
        <ul>
          {linkedInLinks.map(({ name, link }) => (
            <li key={name}>
              <a href={link}>
                <div className="flex items-center justify-start gap-2 rounded-2xl px-4 hover:bg-eco_green">
                  <FaLinkedin />
                  <span>{name}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default AboutUs
