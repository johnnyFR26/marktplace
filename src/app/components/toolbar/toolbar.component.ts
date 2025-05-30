import { Component, effect, input, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'toolbar',
    styleUrls: ['toolbar.component.scss'],
    imports: [FormsModule],
    template: `
        <div class="toolbar">
      <input
        type="text"
        placeholder="Pesquisar Produtos por Nome ou descrição"
        [(ngModel)]="searchTerm"
        />
      <nav class="categories">
        @for (category of categories(); track $index) {
            <button (click)="selectCategory(category)">
              {{ category.name }}
            </button>
        }
      </nav>
      <img src="big_shadow_full.png" alt="">
    </div>
    `
})
export class ToolbarComponent {
    public categories = input<any[]>()
    searchTerm = signal<string>('')


    constructor() {
        effect(() => {
            if(this.searchTerm() === ''){

            }
            return this.categories()?.forEach((category: any) => {
                category.products = category.products?.filter((product: any) => {
                    return product.name.toLowerCase().includes(this.searchTerm().toLowerCase())
                })
            })
        })
     }
     selectCategory(category: any) {
      const element = document.getElementById(category.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    
}