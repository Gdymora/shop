import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { AddPageComponent } from "./add-page/add-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "../shared/auth.guard";
import { QuillModule } from 'ngx-quill';
import { SearchPipe } from '../shared/search.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

@NgModule({
    declarations: [
        AddPageComponent,
        LoginPageComponent,
        DashboardPageComponent,
        AddPageComponent,
        OrdersPageComponent,
        EditPageComponent,
        SearchPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(
            [
                {
                    path: '', component: AdminLayoutComponent, children: [
                        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                        { path: 'login', component: LoginPageComponent },
                        { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
                        { path: 'add', component: AddPageComponent, canActivate: [AuthGuard] },
                        { path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard] },
                        { path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] },
                    ]
                }
            ]),
        QuillModule.forRoot(), // Add Quill Angular WYSIWYG Editor
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }), // Add Quill Angular WYSIWYG Editor 
    ],

    exports: [RouterModule]
})
export class AdminModule {

}