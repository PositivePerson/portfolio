export interface Project {
  id: number,
  name: string,
  img: string,
  link: string,
  description: string,
  tools: Array<string>,
    // {
    //   Javascript: boolean,
    //   jQuery: boolean,
    //   HTML: boolean,
    //   CSS: boolean,
    //   Bootstrap: boolean,
    //   Semantic: boolean,
    //   Angular: boolean,
    //   React: boolean,
    //   MongoDB: boolean,
    //   Hawler: boolean,
    //   PaperScript: boolean
    // }
  prColor: string
}
