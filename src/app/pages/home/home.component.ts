import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienttService } from '../../services/client.service';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DeliveryComponent } from '../../components/delivery/delivery.component';
import { PackageComponent } from '../../components/package/package.component';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, MatTabsModule, DeliveryComponent, PackageComponent],
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
      this.changeFavIcon(this.clientProfile()?.options?.favicon)
    })
  }

  changeFavIcon(icon: string) {
    const link: HTMLLinkElement | null = document.querySelector('link[rel*="icon"]') || null;
    if (link) {
      link.href = icon;
    }else{
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = icon;
      document.head.appendChild(link);
    }
  }
}
