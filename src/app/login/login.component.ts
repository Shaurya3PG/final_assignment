import { Component} from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from '../auth.services';
import {AngularFireAuth} from '@angular/fire/compat/auth'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private afAuth: AngularFireAuth, public authService: AuthService){
  }

  login(){

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); 

  }

}
