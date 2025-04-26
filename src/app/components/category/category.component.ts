import { Component, inject, input } from "@angular/core";
import { ProductComponent } from "../product/product.component";
import { MatDialog } from "@angular/material/dialog";
import { ProductModalComponent } from "../../modals/product-modal/product-modal.component";

@Component({
    selector: 'category',
    styleUrls: ['category.component.scss'],
    imports: [ProductComponent],
    template: `
        <div class="category-container">
          <h2 class="category-title">
            <span class="arrow">❯</span> {{ name() }}
         </h2>
        <div class="product-grid">
            @for (product of products(); track $index) {
                <product
                  [product]="product"
                  (click)="selectProduct(product)"
                 />
            }
          </div>
        </div>
    `
})
export class CategoryComponent {
 readonly name = input<string>();
 readonly products = input<any[]>();
 readonly dialog = inject(MatDialog);

 selectProduct(product: any) {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: { product: product },
    })
    dialogRef.afterClosed().subscribe(result => {
    })
 }
}
