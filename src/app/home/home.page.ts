import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  tags: any;
  constructor(
    private data_provider: DataService
  ) {}
  ngOnInit() {
    this.data_provider.getTags().subscribe(res => {
      this.tags = res;
    });
  }
}
