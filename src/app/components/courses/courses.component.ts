import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  courses: any;
  constructor(
    private data_providers: DataService
  ) { }

  ngOnInit() {
    this.data_providers.getCourses().subscribe(res => {
      this.courses = res;
    })
  }
}
