import { Component, OnInit } from '@angular/core';
import { Company, Service } from 'src/app/app.service';

@Component({
    selector: 'app-dev-express-form',
    templateUrl: './dev-express-form.component.html',
    styleUrls: ['./dev-express-form.component.scss'],
    providers: [Service]
})
export class DevExpressFormComponent {
    companies: Company[] | any;
    labelMode: string;
    labelLocation: string;
    readOnly: boolean | any;
    showColon: boolean |any;
    minColWidth: number;
    colCount: number;
    width: any;
  
    constructor(service: Service) {
      this.labelMode = 'floating';
      this.labelLocation = 'left';
      this.readOnly = false;
      this.showColon = true;
      this.minColWidth = 300;
      this.colCount = 2;
      this.companies = service.getCompanies();
    }
  
    getCompanySelectorLabelMode() {
      return this.labelMode === 'outside'
        ? 'hidden'
        : this.labelMode;
    }
}
