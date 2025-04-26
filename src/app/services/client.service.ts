import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { CategoryService } from "./category.service";

@Injectable({
    providedIn: 'root'
})
export class ClienttService {
    constructor() { }
    private http = inject(HttpClient)
    private categoryService = inject(CategoryService)
    private clientProfile = signal<any>(null);

    getClientProfile() {
        return this.clientProfile.asReadonly()
    }

    queryClientProfile(slug: string) {
        this.http.get(`https://api2.whatsmenu.com.br/api/v2/business/${slug}/profile`)
            .subscribe({
                next: (res: any) => {
                    this.clientProfile.set(res)
                    this.categoryService.setCategories(res.categories)
                },
                error: (err: any) => {
                    console.log(err)
                }
            })

    }
}