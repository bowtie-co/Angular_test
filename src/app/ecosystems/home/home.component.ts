import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  users: Object
  search: string = ""

  // this binds the DataService to the component
  constructor(private data: DataService) { }

  ngOnInit() {
    // Angluar lifecycle hook...similar to componenWillMount
    this.data.getUsers()
      .then(data => {
        this.users = data
        console.log('users', this.users)
      })
  }

  handleClick() {
    console.log('clicked input e', this.search)
  }
}
