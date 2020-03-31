import { Injectable } from '@angular/core';
import { NgbModal,  NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ImageDetailComponent } from '../component/image-detail/image-detail.component';



@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  picture(title: string, message: string, custom ):Observable<boolean> {

    const modal = this.ngbModal.open(ImageDetailComponent, { windowClass: custom});
        
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;

    return from(modal.result).pipe(
      catchError(error => {
        console.warn(error);
        return of(undefined);
      })
    );
  }
}
