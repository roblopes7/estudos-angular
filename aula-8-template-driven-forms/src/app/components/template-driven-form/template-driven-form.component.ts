import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  public listComidas = signal<Array<{comida: string, preco: string}>>([
    {comida: 'Lasanha', preco: 'R$ 15.0'},
    {comida: 'X-Burguer', preco: 'R$ 14.0'},
    {comida: 'Batata Frita', preco: 'R$ 13.0'},
    {comida: 'Bolonhesa', preco: 'R$ 12.0'},
    {comida: 'Pizza', preco: 'R$ 11.0'},
    {comida: 'Prato Feito', preco: 'R$ 10.0'},
  ]);

  public submit(form: NgForm) {
    console.log(form.valid);
  }
}
