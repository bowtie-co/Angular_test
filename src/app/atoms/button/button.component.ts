import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['example', 'onClick']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
