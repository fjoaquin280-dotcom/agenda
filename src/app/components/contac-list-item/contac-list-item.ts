import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../service/contact-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contac-list-item',
   imports: [RouterModule],
  templateUrl: './contac-list-item.html',
  styleUrl: './contac-list-item.css'
})
export class ContacListItem {
 aleatorio = Math.random()
  contactsService = inject(ContactsService)
}

