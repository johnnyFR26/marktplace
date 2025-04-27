import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private deliveryCategories = signal<any[]>([])
    private packageCategories = signal<any[]>([])

    setPackageCategories(categories: any[]) {
        this.packageCategories.set(categories)
    }

    getPackageCategories() {
        return this.packageCategories.asReadonly()
    }

    setDeliveryCategories(categories: any[]) {
        this.deliveryCategories.set(categories)
    }

    getDeliveryCategories() {
        return this.deliveryCategories.asReadonly()
    }
}