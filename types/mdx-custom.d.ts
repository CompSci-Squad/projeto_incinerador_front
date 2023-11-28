declare module '*.mdx' {
  interface Frontmatter {
    title: string
    image: string
    alt: string
  }
  export const frontmatter: Frontmatter
  export const title: string
}
