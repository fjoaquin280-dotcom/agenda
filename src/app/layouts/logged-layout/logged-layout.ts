import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-logged-layout',
  imports: [],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.css'
})
export class LoggedLayout {
  authService = inject(AuthService);

}
