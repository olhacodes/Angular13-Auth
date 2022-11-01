import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: []
})
export class ContactsDetailsComponent implements OnInit {
  id!: number
  user!: Observable<User>

  constructor(
    private activeRoute: ActivatedRoute,
    private adminService: AdminService
  ) { }

  ngOnInit():void {
    this.activeRoute.params.subscribe(param => this.id = param?.['id'])
    this.user = this.adminService.getPerson(this.id)
  }
 
}
