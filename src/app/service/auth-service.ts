import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggeado:boolean = false;

  login(){
    this.loggeado = true;
  }

  logout(){
    this.loggeado = false;
  }
}
