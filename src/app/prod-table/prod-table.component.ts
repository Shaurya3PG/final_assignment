import { Component } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
// import { collection } from 'firebase/firestore';
@Component({
  selector: 'app-prod-table',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.css']
})
export class ProdTableComponent{

  constructor(private firestore: AngularFirestore) { }
  
  addData(f: any){
    // const collectionInstance = collection(this.firestore,'users'); 

    }
  }



