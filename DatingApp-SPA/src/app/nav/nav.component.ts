import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authServive: AuthService) { }

  ngOnInit() {
  }


  login() {
    this.authServive.login(this.model).subscribe(next => {
      console.log('Logged in succesfully');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // if token has value return true otherwise false
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
