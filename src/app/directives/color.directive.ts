import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { ColorService } from '../services/color.service';

@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit {
    // Can define a default color here, I opted not to
    @Input() appColor: string = '';

    constructor(
        private elem: ElementRef,
        private colorService: ColorService
    ) {}

    ngAfterViewInit(): void {
        // If color passed default to that
        // Usecase: swatches
        if (this.appColor) {
            this.setElementColor(this.appColor);
        // Else listen to the colorService currentColor value and use that
        // Usecase: background color
        } else {
            this.colorService.currentColor.subscribe(cc => {
                this.setElementColor(cc);
            });
        }
    }

    // No sense writting this code twice, just abstracted to a method
    setElementColor(newColor: string): void {
        this.elem.nativeElement.style.backgroundColor = newColor;
    }
}
