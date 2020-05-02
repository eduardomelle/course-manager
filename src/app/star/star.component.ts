import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    startWidth: number;

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.startWidth = this.rating * 74 / 5;
    }

}