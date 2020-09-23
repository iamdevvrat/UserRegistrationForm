import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarouselItemContentComponent } from './components/carousel-item-content/carousel-item-content.component';
import { FooterComponent } from './components/footer/footer.component';

import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {path:'', component: CarouselComponent},
  {path:'userprofile', component:UserProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarouselItemContentComponent,
    FooterComponent,
    HeaderComponent,
    UserProfileComponent,
    CarouselComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
