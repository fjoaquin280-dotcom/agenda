import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-pages/login-pages';
import { ContactPage } from './pages/contact-page/contact-page';
import { ContactDetailsPages } from './pages/contact-details-pages/contact-details-pages';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { GroupsPage } from './pages/groups/groups';
import { RegisterPage } from './pages/register-page/register-page';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { onlyLoggedUserGuard } from './guards/only-public-logged-user-guard';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';

export const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "register",
    component: RegisterPage,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "",
    component: LoggedLayout,
    canActivateChild: [onlyLoggedUserGuard],
    children: [
      {
        path: "",
        component: ContactPage
      },{
        path: "contacts/new",
        component: NewEditContact
      },
      {
        path: "contacts/:id",
        component: ContactDetailsPages
      },
       {
        path: "contacts/:idContacto/edit",
        component: NewEditContact
      },
      {
        path: "groups",
        component: GroupsPage
      },
    ]
  },

];
