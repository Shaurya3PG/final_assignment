import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-table',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.css']
})
export class ProdTableComponent implements OnInit{
  usersArray = [
    {
      "id": 1,
      "name": "Chocolate",
      "username": "Sweet",
      "website": "10",
      "isEdit": false
    },
    {
      "id": 2,
      "name": "Milk",
      "username": "Dairy",
      "website": "14", 
      "isEdit": false
    },
    {
      "id": 3,
      "name": "Cookies",
      "username": "biscuit",
      "website": "30",
      "isEdit": false
    },
    {
      "id": 4,
      "name": "Cheese",
      "username": "dairy",
      "website": "30",
      "isEdit": false
    },
    {
      "id": 5,
      "name": "Bread",
      "username": "dairy",
      "website": "30",
      "isEdit": false
    },
    {
      "id": 6,
      "name": "Pizza",
      "username": "junk",
      "website": "20",
      "isEdit": false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(item: any) {
    debugger;
    this.usersArray.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }


}
