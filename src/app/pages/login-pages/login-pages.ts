import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule,FormsModule],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.scss'
})
export class LoginPage {

  errorLogin = false;
  authService = inject(AuthService);

  login(form:any){
    console.log(form)
    this.errorLogin = false;
    if(!form.value.email || !form.value.password){
      this.errorLogin = true;
      return
    }
    this.authService.login(form.value)
  }
}

