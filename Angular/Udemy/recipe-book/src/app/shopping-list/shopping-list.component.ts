import { Component, OnInit } from '@angular/core';

import { Ingedient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingedient[] = [
    new Ingedient('Apples', 5),
    new Ingedient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
