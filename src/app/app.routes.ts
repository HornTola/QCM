import { Routes } from '@angular/router';
import { Biologie } from './biologie/biologie';
import { Biologie1 } from './biologie1/biologie1';

export const routes: Routes = [
    {
        path: 'Biologie',
        component: Biologie
    },
    {
        path: 'Biologie1',
        component: Biologie1
    },
];
