import { Component, signal } from '@angular/core';
import { ModalHabilidades } from '../../components/projetos/modal-habilidades/modal-habilidades';

interface Habilidade {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [ModalHabilidades],
  selector: 'app-habilidades',
  styleUrl: './habilidades.scss',
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public readonly habilidadeSelecionada = signal<Habilidade | undefined>(undefined);

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
      titulo: 'D-Mail Web',
      descricao:
        'A aplicação permite criar, agendar, acompanhar e cancelar mensagens de e-mail, utilizando processamento em segundo plano para realizar os envios automaticamente.',
      urlImagem: '',
      urlRepositorio: 'https://github.com/k-silvax19/D-Mail-Web',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MVC', 'SMTP/TLS', 'Testes Automatizados'],
    },
    {
      titulo: 'Controle De Bar',
      descricao:
        'A aplicação permite que donos de estabelecimentos gerenciem mesas, garçons, produtos, contas e pedidos de forma prática, com cálculo automático do total das contas e do faturamento diário do bar.',
      urlImagem: 'img/bar.gif',
      urlRepositorio: 'https://github.com/PingDev-51/Controle-De-Bar.git',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MVC', 'Testes Automatizados'],
    },
    {
      titulo: 'Escola De Cursos',
      descricao:
        'A Escola de Cursos é um sistema completo para gerenciamento de uma plataforma educacional. A aplicação permite cadastrar cursos organizados por categorias e módulos, gerenciar instrutores e alunos, criar turmas e controlar matrículas',
      urlImagem: 'img/escola-de-cursos.gif',
      urlRepositorio: 'https://github.com/PingDev-51/Escola-De-Cursos-Web',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MVC', 'SQL Server', 'Azure'],
    },
    {
      titulo: 'E-Agenda',
      descricao:
        'A E-AGENDA é um sistema completo de organização do dia a dia. A aplicação reúne em um só lugar o gerenciamento de contatos, agendamento de compromissos, controle de despesas e acompanhamento de tarefas — tudo com validações robustas, persistência em banco de dados e publicação em nuvem.',
      urlImagem: 'img/teste.gif',
      urlRepositorio: 'https://github.com/PingDev-51/Escola-De-Cursos-Web',
      tecnologias: ['C#', 'ASP.NET', 'EF Core', 'MVC', 'SQL Server', 'Azure'],
    },
  ];

 
}
