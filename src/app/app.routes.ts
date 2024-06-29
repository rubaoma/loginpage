import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { Component } from '@angular/core';
import { UserComponent } from './page/user/user.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuardService]
    }


];
