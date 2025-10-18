import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  imports: [RouterModule,FormsModule],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.css'
})
export class LoginPages {
  errorLogin = false;

  login(form:any){
    console.log(form)
    this.errorLogin = false;
    if(!form.email || !form.password){
      this.errorLogin = true;
      return
    }
  }
}
