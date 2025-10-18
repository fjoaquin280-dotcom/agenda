import { Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  aleatorio = Math.random()

  contacts: Contact[] = [
    {
      id: "1",
      firstName: 'Gonzalo',
      lastName: "Bechara",
      number: "3476123123",
      image: "",
      company: "",
      address: "",
      email: 'gbechara@austral.edu.ar',
      isFavourite: true,
    },
    {
      id: "2",
      firstName: 'Lucho',
      lastName: "Barletta",
      number: "3471234234",
      image: "",
      company: "",
      address: "",
      email: 'lbarletta@austral.edu.ar',
      isFavourite: false
    },
  ]

  getContacts() { }

  /** Devuelve un contato en particular segun su ID */
  getContactById() {

  }

  /** Crea un contacto */
  createContact(nuevoContacto:NewContact) {
    const contacto:Contact = {
      ...nuevoContacto,
      id: Math.random().toString()
    }
    this.contacts.push(contacto);
  }

  editContact() { }

  /** Borra un contacto */
  deleteContact(id:string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }

  setFavourite() { }
}

