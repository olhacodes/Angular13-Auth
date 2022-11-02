import { Component, OnInit } from '@angular/core';
import { mapTo, Observable, filter, merge, map } from 'rxjs';
import {ResolveEnd, ResolveStart, Router, ActivatedRoute} from '@angular/router';

import { AdminService } from '../services/admin.service';
import { User } from '../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: []
})
export class ContactsComponent implements OnInit {
  personalList!: Observable<User[]>;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users']));
  }

}
