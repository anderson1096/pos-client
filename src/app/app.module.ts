import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/products/product.component';
import { ProviderComponent} from './components/providers/provider.component';
import { SaleComponent} from './components/sales/sale.component';
import { AboutComponent} from './components/about/about.component';
import { ClientComponent} from './components/clients/client.component';
import { ProductService } from './services/product.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProviderComponent,
    SaleComponent,
    AboutComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
