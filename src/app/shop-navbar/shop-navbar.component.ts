import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { Observable } from 'rxjs';

@Component({
  selector: 'shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.css']
})
export class ShopNavbarComponent {

  user2: Observable<firebase.User> | any;

  
  constructor(private afAuth: AngularFireAuth){
    this.user2 = afAuth.authState;
  }

  logout(){
    this.afAuth.signOut();
  }

}
