import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molecule-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  inputs: ['user']
})
export class UserCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
