import { Component, OnInit } from '@angular/core';
import { ImpresarService } from '../../../core/services/impresar/impresar.service';
import { Impresar } from '../../../data/interfaces/impresar';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component implements OnInit {
  public impresarFromApi: Impresar = { Id: ' ', prenume: '', nume_familie: ' ', jucatori_impresariati: 0 };
  constructor(private readonly impresarService: ImpresarService) { }
  ngOnInit(): void {
    let userId = ' ';
    this.impresarService.getImpresarWithQueryParams(userId).subscribe(data => {
      console.log('getImpresarWithQueryParams', data);
      this.impresarFromApi = data;
    });
    this.impresarService.getImpresarWithQueryParamsFiltered(userId).subscribe(data => {
      this.impresarFromApi = data;
    });
    this.impresarService.response.subscribe((data: any) => {
      console.log('response from BehaviorSubject', data);
      this.impresarFromApi = data;
    });
  }
}
