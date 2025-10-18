import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import { Spinner } from "../../components/spinner/spinner";

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.scss'
})
export class LoginPage {

  errorLogin = false;
  authService = inject(AuthService);
  isLoading = false;

  async login(form:any){
    console.log(form)
    this.errorLogin = false;
    if(!form.value.email || !form.value.password){
      this.errorLogin = true;
      return
    }
    this.isLoading = true;
    await this.authService.login(form.value);
    this.isLoading = false;
    this.errorLogin = true;
  }
}

