import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Component({
    selector: 'color',
    styleUrls: ['color.component.scss'],
    templateUrl: 'color.component.html'
})
export class ColorComponent implements OnInit {
    private _color: string;
    @Input()
    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'background', value);
    }

    constructor(private _elementRef: ElementRef, private _renderer: Renderer) {

    }

    public ngOnInit() {

    }
}

