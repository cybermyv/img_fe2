import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { SERVICES } from '../service.config';



@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getAllImages() {
    return this.http.get(SERVICES.image.path).pipe(tap(data => console.log(data)));
  }

  setImage(val) {
    return this.http.post(SERVICES.image.path, val).pipe(tap(data => console.log(data)));
  }

  getImgById(id: string) {

    return this.http.get(SERVICES.image.path + '/' + id).pipe(
      // tap(data => console.log(data)
      // )
      );
  }

}
