import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molecule-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  inputs: ['handleChange', 'handleClick', 'search']
})
export class SearchInputComponent implements OnInit {

  // public search = ""

  constructor() { }

  ngOnInit() {

  }

}
