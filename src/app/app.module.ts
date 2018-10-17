import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductService } from 'src/app/product.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgmCoreModule } from '@agm/core';
import { CategoryComponent } from './category/category.component';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { SubTextPipe } from './sub-text.pipe';
import { CityComponent } from './city/city.component';
import { AreaComponent } from './area/area.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import {StickyModule} from 'ng2-sticky-kit';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ProductDetailsComponent,
    CategoryComponent,
    SubTextPipe,
    CityComponent,
    AreaComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    NgxSpinnerModule,
    FloatingActionMenuModule,
    NgMasonryGridModule,
    StickyModule,
    AngularFireStorageModule, AngularFireAuthModule, AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwlvMVgUCiwVI2fx3mCQf5i3BRMLMQ2ow'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
