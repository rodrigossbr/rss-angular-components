import {Component} from '@angular/core';
import {PageLink} from './models/page-link.model';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  protected demos: PageLink[] = [
    {
      path: '/state-store',
      title: 'State Store (Signals)',
      description: 'Gerenciamento de estado reativo e performático usando Angular Signals.'
    }
  ];
}
