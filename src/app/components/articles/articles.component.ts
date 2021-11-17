import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  slideOpts = {
    slidesPerView: 1.8,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  aritcles: any;
  constructor(
    private data_providers: DataService
  ) { }

  ngOnInit() {
    this.data_providers.getArticles().subscribe(res => {
      this.aritcles = res;
    })
  }

}
