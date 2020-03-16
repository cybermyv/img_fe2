import {  Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ImageService } from 'src/app/service/image.service';

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
  
  constructor( private imageService: ImageService) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    this.imageService.getAllImages().subscribe(data => this.imageList = Object.values(data));

  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = files.item(0).name; // вставляем имя файла в инпут
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
    // очищаем инпут и переменную с файлом
    this.labelImport.nativeElement.innerText = 'Выбрать файл';
    this.fileToUpload = null;
  }

}
