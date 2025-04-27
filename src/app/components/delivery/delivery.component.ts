import { Component, inject } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { CategoryComponent } from "../category/category.component";

@Component({
    selector: 'delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.scss'],
    imports: [CategoryComponent],
})
export class DeliveryComponent {
    private categoryService = inject(CategoryService)
    readonly categories = this.categoryService.getDeliveryCategories()
}