import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiLocatorService, OrganizationService, ParishService } from 'sc-common';

import { Parish } from 'sc-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parish: Parish;

  constructor(private titleService: Title,
              private apiService: ApiLocatorService,
              private organizationService: OrganizationService,
              private parishService: ParishService) {

    this.organizationService.orgSub.subscribe(org => {
        this.titleService.setTitle(org.name + " Registration");
      });

    this.organizationService.setActiveOrg();

    this.parishService.getActiveParish().subscribe(p => this.parish = p);
  }

  getBannerImage(): string {
    if(!this.parish || !this.parish.bannerGuid)
      return '../../../assets/images/church.png';

    return this.apiService.prefaceUrl('/rest/photo/public/' + this.parish.bannerGuid);
  }

  getPortriatImage(): string {
    if(!this.parish || !this.parish.portraitGuid)
      return '../../../assets/images/church.png';

    return this.apiService.prefaceUrl('/rest/photo/public/' + this.parish.portraitGuid);
  }

}
