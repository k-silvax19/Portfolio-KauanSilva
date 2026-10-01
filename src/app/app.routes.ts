import { Routes } from '@angular/router';

import { Sobre } from './pages/sobre/sobre';
import { Habilidades } from './pages/habilidades/habilidades';
import { Tecnologias } from './pages/tecnologias/tecnologias';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    component: Sobre,
  },
  {
    path: 'habilidades',
    component: Habilidades,
  },
  {
    path: 'tecnologias',
    component: Tecnologias,
  },
];