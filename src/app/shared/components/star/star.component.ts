import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'dio-app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 150 / 10;
    }

}
