import { Routes } from '@angular/router';
import { LoginPages } from './pages/login-pages/login-pages';
import { ContactPage } from './pages/contact-page/contact-page';
import { ContactDetailsPages } from './pages/contact-details-pages/contact-details-pages';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPages
    },
    {
    path: "",
    component: LoggedLayout,
    children: [
        {
        path: "",
        component: ContactPage
    },
    {
        path: "contacts/:id",
        component: ContactDetailsPages
    },
    ]
  },
];
