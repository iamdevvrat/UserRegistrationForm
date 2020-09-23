
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-carousel-item-content',
  templateUrl: './carousel-item-content.component.html',
  styleUrls: ['./carousel-item-content.component.css']
})
export class CarouselItemContentComponent implements OnInit {
  isAddress : boolean = true;  
  router: any;
  dynamicFormArray : any;
  locations = ["Mumbai", "Kolkata", "Nagpur", "Patna"];
  

  userProfileForm = new FormGroup({
    userProfileFirstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]'),
      Validators.maxLength(10)
    ])
  });

  constructor(router:Router, private httpClient : HttpClient) { 
    
  }
    
    
  ngOnInit() {
    this.httpClient.get('assets/db.json').subscribe(data => {
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray);
    });
  }

  
}
