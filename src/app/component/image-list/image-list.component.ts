import {  Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';



import { ImageService } from 'src/app/service/image.service';
// import { ImageDetailComponent } from '../image-detail/image-detail.component';

 import { ModalService } from 'src/app/service/modal.service';
//  import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  title = 'gallery';

  @ViewChild('labelImport', { read: ElementRef, static: false }) labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;
  imageList: any;

  constructor( private imageService: ImageService, private router: Router, private modalService: ModalService) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }


  ngOnInit() {
    this.loadPictures();

  }

  loadPictures() {
     this.imageService.getAllImages().subscribe(data => this.imageList = Object.values(data));
    
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = files.item(0).name; // вставляем имя файла в инпут
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);

    const formData = new FormData();

    formData.append('importFile', this.fileToUpload );
    formData.append('path', 'Дополнительный текст' );

    this.imageService.setImage(formData).subscribe(() => this.loadPictures());

    // очищаем инпут и переменную с файлом
    this.labelImport.nativeElement.innerText = 'Выбрать файл';
    this.fileToUpload = null;

    // this.loadPictures();
  }

  navigateToId(id: string) {
    this.modalService.picture(id, 'message', 'md-class').pipe(
      take(1)
    ).subscribe(result => console.log(result))
  }

  open(){
    this.modalService.picture('title', 'message', 'custom-class').pipe(
      take(1)
    ).subscribe(result => console.log(result))

  }

  

}
