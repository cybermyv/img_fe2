import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ImageListComponent } from './component/image-list/image-list.component';
import { ImageDetailComponent } from './component/image-detail/image-detail.component';
import { ImageService } from './service/image.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // NgbModule.forRoot()
    
  ],
  providers: [
    ImageService,
    
  ],
  entryComponents:[
    ImageDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
