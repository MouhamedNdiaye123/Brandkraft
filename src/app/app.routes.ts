import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeIndexComponent } from './pages/home-index/home-index.component';
import { PortfolioIndexComponent } from './pages/portfolio-index/portfolio-index.component';
import { TeamIndexComponent } from './pages/team-index/team-index.component';
import { HireIndexComponent } from './pages/hire-index/hire-index.component';


export const routes: Routes = [
    {path: '', component: HomeIndexComponent},
    {path: 'portfolio', component: PortfolioIndexComponent},
    {path: 'teams', component: TeamIndexComponent},
    {path: 'hire', component: HireIndexComponent},
];
