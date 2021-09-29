import { Component, OnInit } from '@angular/core';
import { ColorService } from './services/color.service';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private partyInterval = interval(100);

    constructor(
        public colorService: ColorService
    ) {}

    ngOnInit(): void {}

    selectColor(c: string): void {
        this.colorService.setCurrentColor(c);
    }

    // https://rxjs.dev/api/index/function/interval
    // This uses the RxJS built in interval observable
    // It uses a pipe to trigger the "take" method - essentially how many iterations to run
    // Then on subscription of each tick (an index) I updat ethe current color to the matching list index
    partyMode(): void {
        this.partyInterval.pipe(
            take(this.colorService.colorsList.value.length)
        ).subscribe((tick: any) => {
            this.colorService.currentColor.next(this.colorService.colorsList.value[tick]);
        })
    }
}
