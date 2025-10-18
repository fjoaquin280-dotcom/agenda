export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  address: string
  email: string,
  image: string,
  number: string,
  company: string
  isFavourite?: boolean
}