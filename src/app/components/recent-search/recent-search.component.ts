import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
})
export class RecentSearchComponent implements OnInit {
  recent_searches: any;
  constructor(
    private data_providers: DataService
  ) { }

  ngOnInit() {
    this.data_providers.getSearches().subscribe(res => {
      this.recent_searches = res;
    })
  }

}
