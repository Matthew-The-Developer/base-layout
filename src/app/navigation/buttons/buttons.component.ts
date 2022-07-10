import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { BaseRoute } from './buttons.model';

@UntilDestroy()
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() labels: boolean = true;

  currentURL: string = '/';

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.router.events.pipe(
      untilDestroyed(this),
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => this.currentURL = (event as NavigationEnd).url);
  }

  get baseRoute(): typeof BaseRoute {
    return BaseRoute;
  }
}
