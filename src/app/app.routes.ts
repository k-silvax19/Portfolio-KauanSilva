import { Routes } from '@angular/router';

import { SobreComponent } from './pages/sobre/sobre.component';
import { PortfolioComponent } from './pages/portfolio/habilidades.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent
  }
];