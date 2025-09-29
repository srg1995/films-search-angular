import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserStore } from '../../services/user-store.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected userStore = inject(UserStore);
  protected authService = inject(AuthService);
  protected isOpen: WritableSignal<boolean> = signal(false);
  protected derivedUser = computed(() => this.userStore.user()?.displayName);
  protected isLoged = computed(() => this.userStore.isLoged());

  toogleModal(): void {
    if (this.isLoged()) {
      this.logout();
    } else {
      this.isOpen.update((value: boolean) => !value);
    }
  }
  login() {
    this.authService
      .loginWithGoogle()
      .then((result) => {
        this.userStore.addUser(result.user);
        this.isOpen.update((value: boolean) => !value);
      })
      .catch((err) => console.error(err));
  }
  loginFacebook() {
    this.authService
      .loginWithFacebook()
      .then((result) => {
        this.userStore.addUser(result.user);
        this.isOpen.update((value: boolean) => !value);
      })
      .catch((error) => {
        console.error('Error login Facebook:', error);
      });
  }
  logout() {
    this.authService
      .logout()
      .then(() => {
        this.userStore.deleteUser();
        console.log('Sesión cerrada');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}
