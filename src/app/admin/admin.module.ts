import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductPageComponent } from "../product-page/product-page.component";
import { AddPageComponent } from "./add-page/add-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";

@NgModule({
    declarations: [
        AddPageComponent,
        LoginPageComponent,
        DashboardPageComponent,
        AddPageComponent,
        OrdersPageComponent,
        ProductPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: '', component: AdminLayoutComponent, children: [
                        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                        { path: 'login', component: LoginPageComponent },
                        { path: 'dashboard', component: DashboardPageComponent },
                        { path: 'add', component: AddPageComponent },
                        { path: 'orders', component: OrdersPageComponent },
                        { path: 'product/:id/edit', component: ProductPageComponent },
                    ]
                }
            ])
    ],
    exports: [RouterModule ]
})
export class AdminModule {

}