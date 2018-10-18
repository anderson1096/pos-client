import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/products/product.component';
import { ProviderComponent} from './components/providers/provider.component';
import { SaleComponent} from './components/sales/sale.component';
import { AboutComponent} from './components/about/about.component';
import { ClientComponent} from './components/clients/client.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductComponent},
    { path: 'providers', component: ProviderComponent},
    { path: 'sales', component: SaleComponent},
    { path: 'about', component: AboutComponent},
    { path: 'clients', component: ClientComponent},

            
];

export const Routing = RouterModule.forRoot(APP_ROUTES);