import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  imports: [],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {
  register(form:any){
    console.log(form);
    this.errorRegister = false;
    if(!form.email || !form.password || !form.password2 || form.password !== form.password2){
      this.errorRegister = true;
      return
    }

  }
}
