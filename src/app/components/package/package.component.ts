import { Component, inject } from "@angular/core";
import { CategoryComponent } from "../category/category.component";
import { CategoryService } from "../../services/category.service";

@Component({
    selector: 'package',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.scss'],
    imports: [CategoryComponent],
})
export class PackageComponent {
    private categoryService = inject(CategoryService)
    readonly categories = this.categoryService.getCategories()
}