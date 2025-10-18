import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contac-list-item/contac-list-item';
import { Contact } from '../../interfaces/contact';
import { AuthService } from '../../service/auth-service';
import { ContactsService } from '../../service/contact-service';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactsPage {

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

