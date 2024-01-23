import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ImpresarService {
  private readonly route = 'impresars';
  private responseSource = new BehaviorSubject<object>({});
  public response = this.responseSource.asObservable();
  constructor(private readonly apiService: ApiService) { }

  getImpresarWithQueryParams(Id= {}) {
    return this.apiService.get(this.route + '/fromQuery/', { Id });
  }
  getImpresarWithQueryParamsFiltered(Id = {}) {
    return this.apiService.get(this.route + '/fromQuery/', { Id }).pipe(map(x => {
      console.log('data from api inside servide', x)
      this.responseSource.next(x);
      return x;

    }));
  }
}
