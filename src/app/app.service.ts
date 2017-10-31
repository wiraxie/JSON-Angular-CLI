import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReturnsJsonArrayService 
{
  constructor(private http: Http) {}

  getPeople(): Observable<any> 
  { 
    /*sini request json*/
    return this.http.request('./assets/data/1.json')
    .map(res => res.json());
  }
}