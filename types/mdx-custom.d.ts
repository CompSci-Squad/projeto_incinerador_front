declare module '*.mdx' {
  interface Frontmatter {
    title: string
    image?: string
    images?: Array<string>
  }
  export const frontmatter: Frontmatter
  export const title: string
}
