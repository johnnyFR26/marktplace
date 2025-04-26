import { CurrencyPipe } from "@angular/common";
import { Component, inject, model } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'product-modal',
    styleUrls: ['product-modal.component.scss'],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        CurrencyPipe
    ],
    template: `
<h2 mat-dialog-title>{{product().name}}</h2>
<mat-dialog-content>
  @for (complement of product().complements; track $index) {
    <p>{{complement.name}}</p>
    <ul>
        @for (item of complement.itens; track $index) {
            <li>{{item.name}}</li>
        }
    </ul>
  }
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Cancelar</button>
  <button mat-button
    class="add-to-cart" 
    [mat-dialog-close]="product()" 
    cdkFocusInitial
    >Adicionar {{product().value | currency: 'BRL'}}</button>
</mat-dialog-actions>

    `
})
export class ProductModalComponent {
    readonly dialogRef = inject(MatDialogRef<ProductModalComponent>);
    readonly data = inject<any>(MAT_DIALOG_DATA);
    readonly product = model(this.data.product);

    onNoClick(): void {
        this.dialogRef.close();
      }

}