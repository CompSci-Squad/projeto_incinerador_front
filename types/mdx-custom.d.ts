declare module '*.mdx' {
  interface Frontmatter {
    title: string
    image: string
    alt: string
    images: Array<string>
    alts: Array<string>
  }
  export const frontmatter: Frontmatter
  export const title: string
}
