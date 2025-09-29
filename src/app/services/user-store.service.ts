import { Injectable, signal, WritableSignal } from '@angular/core';
import { Genre } from '../models/Genre.model';
import { User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserStore {
  user: WritableSignal<User | null> = signal(null);

  getName() {
    console.log('nombre de usuario', this.user()?.displayName);
    return this.user;
  }

  addUser(user: User) {
    console.log('usuario añadido');
    this.user.set(user);
  }
  deleteUser() {
    this.user.set(null);
  }
  isLoged = () => {
    return this.user();
  };
}
