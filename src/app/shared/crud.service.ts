import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  itemsRef: AngularFireList<any>;
  itemRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  AddItem(item: Product){
    this.itemsRef.push({
      name: item.name,
      tags: item.tag,
      quantity: item.quantity
    });

  }
  GetItem(id:string){
    this.itemRef = this.db.object('item-list/' + id);
    return this.itemRef;
  }

  GetItemList(){
    this.itemsRef = this.db.list('items-list');
    return this.itemsRef;
  }

  UpdateItem(item: Product){
    this.itemRef.update({
      name: item.name,
      tag: item.tag,
      quantity: item.quantity
    });
  }

  DeleteStudent(id: string){
    this.itemRef = this.db.object('item-list/' + id);
    this.itemRef.remove();
  }
}
