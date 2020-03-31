import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  
})


export class ImageDetailComponent implements OnInit {
  image: any;
  title: string;
  message: string;
  
  constructor(private imageService: ImageService, private route: ActivatedRoute,
    public activeModal: NgbActiveModal
     ) {   }

  load(id: string){
    this.imageService.getImgById(id).subscribe(
      data => this.image = data );
  }

  ngOnInit() {    
   this.load(this.title);
  }

  close(result: boolean){
    this.activeModal.close(result);
  }
  
}
