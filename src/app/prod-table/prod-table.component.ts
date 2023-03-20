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
      "name": "Leanne Graham",
      "username": "Bret",
      "website": "hildegard.org",
      "isEdit": false
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "website": "anastasia.net", 
      "isEdit": false
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "website": "ramiro.info",
      "isEdit": false
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "website": "kale.biz",
      "isEdit": false
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "website": "demarco.info",
      "isEdit": false
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "website": "ola.org",
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
