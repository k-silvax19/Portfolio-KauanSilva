import { Component } from '@angular/core';

interface Tecnologia {
  imagem: string;
  titulo: string;
  descricao: string;
}
@Component({
  imports: [],
  selector: 'app-tecnologias',
  styleUrl: './tecnologias.scss',
  templateUrl: './tecnologias.html',
})
export class Tecnologias {
  public readonly tecnologias: Tecnologia[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=cs',
      titulo: 'C#',
      descricao: 'Desenvolvimento de aplicações robustas e soluções orientada a objetos',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=python',
      titulo: 'Python',
      descricao: 'Desenvolvimento de aplicações, automações e soluções utilizando Python',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=html',
      titulo: 'HTML',
      descricao: 'Estruturação de páginas web com foco em organização e semântica',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=css',
      titulo: 'CSS',
      descricao: 'Estilização e criação de interfaces responsivas para aplicações web',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=scss',
      titulo: 'SCSS',
      descricao: 'Estilização e criação de interfaces responsivas para aplicações web',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap',
      titulo: 'Bootstrap',
      descricao: 'Construção de interfaces responsivas utilizando componentes e utilitários',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=mysql',
      titulo: 'SQL',
      descricao: 'Criação de consultas, manipulação e gerenciamento de bancos de dados relacionais',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=dotnet',
      titulo: 'Entity Framework',
      descricao: 'Mapeamento objeto-relacional e acesso a dados utilizando Entity Framework Core',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postgres',
      titulo: 'PostgreSQL',
      descricao: 'Desenvolvimento e gerenciamento de bancos de dados relacionais com PostgreSQL',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker',
      titulo: 'Docker',
      descricao: 'Containerização e gerenciamento de ambientes para aplicações',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=github',
      titulo: 'GitHub',
      descricao: 'Versionamento, colaboração e gerenciamento de projetos utilizando GitHub',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=azure',
      titulo: 'Azure',
      descricao: 'Deploy e criação de banco de dados com a plataforma azure',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git',
      titulo: 'Git',
      descricao: 'Controle de versão e gerenciamento do histórico de desenvolvimento',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular',
      titulo: 'Angular',
      descricao: 'Desenvolvimento de aplicações web utilizando componentes e arquitetura Angular',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=typescript',
      titulo: 'TypeScript',
      descricao: 'Desenvolvimento de aplicações tipadas com JavaScript e recursos modernos',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=react',
      titulo: 'React',
      descricao: 'Desenvolvimento de interfaces web utilizando componentes reutilizáveis',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=js',
      titulo: 'JavaScript',
      descricao: 'Desenvolvimento de aplicações e funcionalidades interativas para a web',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=vscode',
      titulo: 'Visual Studio Code',
      descricao: 'Desenvolvimento, edição e depuração de aplicações em diferentes tecnologias',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=visualstudio',
      titulo: 'Visual Studio',
      descricao:
        'Desenvolvimento de aplicações .NET com ferramentas avançadas de depuração e testes',
    },
  ];
}
