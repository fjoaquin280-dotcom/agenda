import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {
  
  contactos = [
    {
      nombre: 'Gonzalo',
      telefono: 3476123123,
      email: 'gbechara@austral.edu.ar'
    },
    {
      nombre: 'Lucho',
      telefono: 3471234234,
      email: 'lbarletta@austral.edu.ar'
    }
  ]

}
