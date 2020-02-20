import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public urlServicesBD = 'http://localhost:3000/api';

  constructor() {
    console.log('echb Ready');
   }
}
