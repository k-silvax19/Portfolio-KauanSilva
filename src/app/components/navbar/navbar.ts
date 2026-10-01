import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ItemNavbar {
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  public readonly itens: ItemNavbar[] = [
    {
      titulo: 'sobre',
      url: '/sobre',
      icone: 'bi-person',
    },
    {
      titulo: 'tecnologias',
      url: '/tecnologias',
      icone: 'bi-card-list',
    },
    {
      titulo: 'projetos',
      url: '/projetos',
      icone: 'bi-award',
    },
  ];
}
