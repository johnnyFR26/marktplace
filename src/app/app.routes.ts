import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: ':slug',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        children: [
            {
                path: 'status/:code',
                loadComponent: () => import('./pages/home/status/status.component').then(m => m.StatusComponent)
            },
        ]

    },
    {
        path: ':slug/pdv',
        loadComponent: () => import('./pages/pdv/pdv.component').then(m => m.PdvComponent)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
