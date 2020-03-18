import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.imageService.getImgById(this.route.snapshot.params['id']).subscribe(
      data => this.image = data );
  }

}
