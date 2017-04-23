import { Component }  from '@angular/core';

import { AppService } from './app.service';

@Component({
    selector:    'my-app',
    templateUrl: './app.component.html',
    providers:   [ AppService ]
})
export class AppComponent {
    area: number = 0;

    constructor(private appService: AppService) { }

    calcCircleArea(radius: number): void {
        this.area = this.appService.calcCircleArea(radius);
    }
}
