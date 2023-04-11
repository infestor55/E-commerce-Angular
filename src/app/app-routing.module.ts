import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { CreateNewProductComponent } from './create-new-product/create-new-product.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BabiesShopComponent } from './babies-shop/babies-shop.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
    {path: 'login', component: LoginComponent},
  {path: 'forbiden', component: ForbidenComponent},
  { path: 'CreateNewProduct', component: CreateNewProductComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'stock', component: SidebarComponent, children : [
    { path: 'babies-shop', component: BabiesShopComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
