import { Component } from '@angular/core';
import { Database } from '@angular/fire/database';
import { ref, set } from 'firebase/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  database: Database;

  registerItem(value: any){
    set(ref(this.database, 'users/' + value.tag), {
      name: value.name,
      desc: value.description,
      amount : value.quantity,
      tags: value.tag
    });
  
    alert("user created")
  
  }
}

