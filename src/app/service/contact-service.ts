import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

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
      email: 'lbarletta@austral.edu.ar'
    },
  ]

  getContacts() { }

  /** Devuelve un contato en particular segun su ID */
  getContactById() {

  }

  /** Crea un contacto */
  createContact() {
    const nuevoContacto:Contact = {
      firstName: "Nuevo",
      id: '',
      lastName: 'Contacto',
      address: '-',
      email: '-',
      image: '-',
      number: '-',
      company: '-'
    }
    this.contacts.push(nuevoContacto);
  }

  editContact() { }

  /** Borra un contacto */
  deleteContact(id:string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }

  setFavourite() { }
}
