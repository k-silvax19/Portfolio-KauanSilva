import { Component } from '@angular/core';

interface Habilidade {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [],
  selector: 'app-habilidades',
  styleUrl: './habilidades.scss',
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public readonly habilidades: Habilidade[] = [
    {
      titulo: 'Gerador De Certificados Online (API)',
      descricao: 'Permite gerar um zip de certificados com pdf estilizados para cada aluno',
      urlImagem: '',
      urlRepositorio: 'https://github.com/PingDev-51/Gerador-de-Certificados-API',
      tecnologias: [
        'C#',
        'ASP.NET',
        'EF Core',
        'MediatR',
        'PostgreSQL',
        'QuestPDF',
        'RabbitMq',
        'SwaggerUI',
      ],
    },
    {
      titulo: 'DeliveryApp (API)',
      descricao:
        'API REST para gerenciamento de uma plataforma de delivery, desenvolvida em C# com .NET, seguindo princípios de arquitetura em camadas, separação de responsabilidades e aplicação de regras de negócio.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/k-silvax19/DeliveryApp.git',
      tecnologias: [
        'C#',
        'ASP.NET',
        'EF Core',
        'MediatR',
        'PostgreSQL',
        'QuestPDF',
        'RabbitMq',
        'SwaggerUI',
      ],
    },
    {
      titulo: 'Controle De Bar',
      descricao:
      'A aplicação permite que donos de estabelecimentos gerenciem mesas, garçons, produtos, contas e pedidos de forma prática, com cálculo automático do total das contas e do faturamento diário do bar.',
      urlImagem: '?',
      urlRepositorio: 'https://github.com/PingDev-51/Controle-De-Bar.git',
      tecnologias: [
        'C#',
        'ASP.NET',
        'EF Core',
        'MVC',
        'Testes Automatizados'
      ],
    },
  ];
}
