import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggeado:boolean = false;

  async login(loginData: any){
    this.loggeado = true;
    const res = await fetch("https://agenda-api.somee.com/api/authentication/authenticate",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)
    })
    console.log("Respuesta del back",res);
  }

  logout(){
    this.loggeado = false;
  }
}

