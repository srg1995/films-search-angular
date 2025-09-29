import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserStore } from '../../services/user-store.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private authService: AuthService, private store: UserStore) {}

  login() {
    this.authService
      .loginWithGoogle()
      .then((result) => {
        this.store.addUser(result.user);
      })
      .catch((err) => console.error(err));
  }
  loginFacebook() {
    this.authService
      .loginWithFacebook()
      .then((result) => {
        this.store.addUser(result.user);
      })
      .catch((error) => {
        console.error('Error login Facebook:', error);
      });
  }
  logout() {
    this.authService
      .logout()
      .then(() => {
        console.log('Sesión cerrada');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}
