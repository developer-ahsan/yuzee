import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RecentSearchComponent } from '../components/recent-search/recent-search.component';
import { FriendRequestsComponent } from '../components/friend-requests/friend-requests.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { ArticlesComponent } from '../components/articles/articles.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, RecentSearchComponent, FriendRequestsComponent, CoursesComponent,ArticlesComponent]
})
export class HomePageModule { }
