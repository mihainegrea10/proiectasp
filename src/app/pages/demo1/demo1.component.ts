import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Impresar } from '../../data/interfaces/impresar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component implements OnInit {
  public title: string = "Demo 1 component with request inside";
  public impresarFromApi1: Impresar = { Id: ' ',prenume: '', nume_familie: ' ', jucatori_impresariati: 0 };
  public impresarFromApi2: Impresar = { Id: ' ', prenume: '', nume_familie: ' ', jucatori_impresariati: 0 };
  public impresarFromApi3: Impresar = { Id: ' ', prenume: '', nume_familie: ' ', jucatori_impresariati: 0 };
  public impresarFromApi4: Impresar = { Id: ' ', prenume: '', nume_familie: ' ', jucatori_impresariati: 0 };

  public impresars: Impresar[] = [];


  private readonly apiUrl = environment.apiUrl;
  constructor(private readonly httpClient: HttpClient, private readonly router:Router) { }
  ngOnInit(): void {
    //GET
    let userPrenume = ' ';

    this.httpClient.get<Impresar>(`${this.apiUrl}impresars/byPrenume/${userPrenume}`).subscribe((data) => {
      console.log('impresar 1 from api', data);
      this.impresarFromApi1 = data;
    });


    let params = { Prenume: ' ' };
    this.httpClient.get<Impresar>(`${this.apiUrl}impresars/fromQuery`, { params }).subscribe((data) => {
      console.log('impresar 2 from api', data);
      this.impresarFromApi2 = data;
    });

    const headers = new HttpHeaders({
      'Content-Type': ' application/json',
      'prenume': ' '
    });
    this.httpClient.get<Impresar>(`${this.apiUrl}impresars/fromHeader`, { headers }).subscribe((data) => {
      console.log('impresar 3 from api', data);
      this.impresarFromApi3 = data;
    });

    //POST
    const formData = new FormData();
    formData.append('Id', 'asd');
    formData.append('prenume', 'Bob');
    formData.append('nume_familie', 'Alex');
    formData.append('jucatori_impresariati', '20');

    this.httpClient.post(`${this.apiUrl}impresars/fromForm`, formData).subscribe((data: any) => {
      console.log('Post reponse from api with from form ', data);
      this.impresars = data;
    });
    let newImpresar = {
      Id: 'asd',
      Prenume: 'mihai',
      Nume_familie: 'alex',
      Jucatori_impresariati: 20
    };

    this.httpClient.post(`${this.apiUrl}impresars/fromBody`, newImpresar).subscribe((data: any) => {
      console.log('Post reponse from api with from body', data);
      this.impresars = data;
    });

    //Patch
    let patchObject = [
      {
        'op': 'replace',
        'path': 'prenume',
        'value': 'mihai'
      }];
    let userPrenume2 = 'alex';
    this.httpClient.patch(`${this.apiUrl}impresars/patch/${userPrenume2}`, patchObject).subscribe((data: any) => {
      console.log('Patch reponse from api', data);
      this.impresars = data;
    });

  }
  navigateTo(impresar: Impresar) {
    this.router.navigate(['/demo2', impresar.jucatori_impresariati]);
  }
}

