import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../service/contact-service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contac-list-item.html',
  styleUrl: './contac-list-item.scss'
})
export class ContactListItem {
  contact = input.required<Contact>();
  contactsService = inject(ContactsService);

  openDeleteModal() {
    Swal.fire({
      title: "¿Desea borrar el contacto?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Eliminar definitivamente`
    }).then((result) => {
      if (result.isDenied) {
        this.contactsService.deleteContact(this.contact().id);
      }
    });
  }
}
