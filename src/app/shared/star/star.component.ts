import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'pm-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // We receive this value from the parent component (ProductListComponent)
    @Input() 
    rating: number; 

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}