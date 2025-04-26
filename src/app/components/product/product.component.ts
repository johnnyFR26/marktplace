import { CurrencyPipe } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
    selector: 'product',
    styleUrls: ['product.component.scss'],
    imports: [CurrencyPipe],
    template: `
        <div class="product-card" [class.unavailable]="!product().available">
    <div class="product-info">
        <h3>{{ product().name }}</h3>
        <p class="description">{{ product().description }}</p>
        <p class="price"> {{ product().value | currency: 'BRL' }}</p>
    </div>
    <img [src]="product().image" alt="{{ product().name }}" />
    </div>

    `
})
export class ProductComponent {
    readonly product = input<any>()
}