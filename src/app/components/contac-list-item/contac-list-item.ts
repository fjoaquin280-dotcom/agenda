import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../service/contact-service';

@Component({
  selector: 'app-contac-list-item',
  imports: [],
  templateUrl: './contac-list-item.html',
  styleUrl: './contac-list-item.css'
})
export class ContacListItem {
 aleatorio = Math.random()
  contactsService = inject(ContactsService)
}

