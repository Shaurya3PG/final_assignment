import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ShopNavbarComponent } from './shop-navbar/shop-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdTableComponent } from './prod-table/prod-table.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.services';
import { EditDataComponent } from './admin/edit-data/edit-data.component';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
@NgModule({
  declarations: [
    AppComponent,
    ShopNavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    MyordersComponent,
    AdminComponent,
    LoginComponent,
    ProductFormComponent,
    ProdTableComponent,
    EditDataComponent,
    CartButtonComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule,
    NgbModule,
    AngularFireStorageModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'order', component: MyordersComponent},
      {path: 'edit', component: EditDataComponent}
    ]),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, AngularFirestore,{provide:FIREBASE_OPTIONS, useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }
