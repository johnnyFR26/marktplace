import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categories = signal<any[]>([])

    setCategories(categories: any[]) {
        this.categories.set(categories)
    }

    getCategories() {
        return this.categories.asReadonly()
    }
}