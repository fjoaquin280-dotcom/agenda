import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContacListItem } from '../../components/contac-list-item/contac-list-item';
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../service/auth-service';
import { ContactsService } from '../../service/contact-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContacListItem, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactsPage {

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

  createContact(form:any){
    const nuevoContacto: NewContact ={
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      image: form.image,
      number: form.number,
      company: form.company,
      isFavorite: form.isFavorite
    }

    this.contactsService.createContact(nuevoContacto)
  }
}

