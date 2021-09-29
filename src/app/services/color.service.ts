import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ColorService {

    public colorsList: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
        '#dc3545', // red
        '#fd7e14', // orange
        '#ffc107', // yellow
        '#28a745', // green
        `#20c997`, // teal
        `#17a2b8`, // cyan
        '#007bff', // blue
        '#6610f2', // indigo
        '#6f42c1', // purple
        `#e83e8c`, // pink
    ]);
    public currentColor: BehaviorSubject<string> = new BehaviorSubject<string>(this.colorsList.value[0]);

    constructor() {}

    setCurrentColor(c: string): void {
        this.currentColor.next(c);
    }
}
