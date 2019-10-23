import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OrganizationService } from 'sc-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title,
              private organizationService: OrganizationService) {
    this.organizationService.orgSub.subscribe(org => {
        this.titleService.setTitle(org.name + " Registration");
      });

    this.organizationService.setActiveOrg();
  }
}
