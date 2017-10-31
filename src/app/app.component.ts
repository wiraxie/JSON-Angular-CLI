import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';
import { ReturnsJsonArrayService } from './app.service';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReturnsJsonArrayService],
})
export class AppComponent {
  title = 'Project';

  data : Observable<Array<any>>;

  constructor(private service: ReturnsJsonArrayService) 
  {
    this.data = service.getPeople();
    console.log("AppComponent.data:" + this.data);
  }

  isValid :boolean = false;

  // deleteRow(id)
  // {
  //   for(let i = 0; i < this.data.length; ++i)
  //   {
  //       if (this.data[i].id === id)
  //       {
  //           this.data.splice(i,1);
  //       }
  //   }
  // }
}