import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/Alertify.service';
import { User } from '../../_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private altertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  // user now loaded via the member-list.resolver
  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.altertify.error(error);
  //   });
  // }
}
