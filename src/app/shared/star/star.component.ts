import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

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

    /* 
    We pass an event to the parent component (ProductListComponent). 
    The only way that a nested component can pass information to its 
    container is with an event!
    */
    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        // Pass the string emitted to the parent component
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}