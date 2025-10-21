import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contac-list-item/contac-list-item';
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../service/auth-service';
import { ContactsService } from '../../service/contact-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule, ContactListItem, FormsModule],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.scss']
})
export class ContactPage implements OnInit {
  authService = inject(AuthService);
  contactsService = inject(ContactsService);

  async ngOnInit(): Promise<void> {
    await this.contactsService.getContacts();
  }
}






  
