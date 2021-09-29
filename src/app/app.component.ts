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
    public localColorsList: string[] = [];
    private partyInterval = interval(100);

    constructor(
        public colorService: ColorService
    ) {}

    ngOnInit(): void {
        this.colorService.colorsList.subscribe(cl => this.localColorsList = cl);
    }

    selectColor(c: string): void {
        this.colorService.setCurrentColor(c);
    }

    // https://rxjs.dev/api/index/function/interval
    partyMode(): void {
        this.partyInterval.pipe(
            take(10)
        ).subscribe((tick: any) => {
            this.colorService.currentColor.next(this.colorService.colorsList.value[tick]);
        })
    }
}
