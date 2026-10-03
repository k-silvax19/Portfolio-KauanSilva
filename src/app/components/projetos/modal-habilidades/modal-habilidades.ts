import { Component, input, output } from '@angular/core';

interface HabilidadeSelecionada {
  titulo: string;
  urlImagem: string;
}

@Component({
  imports: [],
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.html',
})
export class ModalHabilidades {
  public readonly habilidade = input.required<HabilidadeSelecionada | undefined>();

   public readonly modalFechado = output<void>();
}
