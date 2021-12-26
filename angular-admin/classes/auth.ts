import { EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';

export class Auth {
  static userEmitter = new EventEmitter<User>();
}
