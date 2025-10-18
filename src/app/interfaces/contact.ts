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
/** Interfaz que es igual a Contact pero sin ID */
export type NewContact = Omit<Contact,"id">;
