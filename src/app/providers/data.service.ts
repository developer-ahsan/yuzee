import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor(public http: HttpClient) { }
  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }
  processData(data: any) {
    this.data = data;
    return this.data;
  }
  getTags() {
    return this.load().pipe(
      map((data: any) => {
        return data.tags;
      })
    );
  }
  getCourses() {
    return this.load().pipe(
      map((data: any) => {
        return data.courses;
      })
    );
  }
  getSearches() {
    return this.load().pipe(
      map((data: any) => {
        return data.recent_searches;
      })
    );
  }
  getPeople() {
    return this.load().pipe(
      map((data: any) => {
        return data.people_you_may_know;
      })
    );
  }
  getArticles() {
    return this.load().pipe(
      map((data: any) => {
        return data.articles;
      })
    );
  }

}
