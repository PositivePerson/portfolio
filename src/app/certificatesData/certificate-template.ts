export interface Certificate {
  id: number,
  name: string,
  website: string,
  author: {
    name: string,
    surname: string
  },
  acqDate: string,
  link: string
}
