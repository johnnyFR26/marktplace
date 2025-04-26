import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienttService } from '../../services/client.service';
import { CategoryComponent } from '../../components/category/category.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  imports: [CategoryComponent, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  url: string | undefined | null;

  private route = inject(ActivatedRoute)
  private clientService = inject(ClienttService)
  protected clientProfile = this.clientService.getClientProfile()

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.url = params.get('slug')

      this.clientService.queryClientProfile(this.url!)
    })
  }
}
