import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss'],
})
export class FriendRequestsComponent implements OnInit {

  requests: any;
  constructor(
    private data_providers: DataService
  ) { }

  ngOnInit() {
    this.data_providers.getPeople().subscribe(res => {
      this.requests = res;
    })
  }

}
