import {
    Directive, ElementRef, Input, OnInit, Renderer2
} from "@angular/core";

enum Colors {
    red = "#ff0000",
    yellow = "#FFFF00",
    blue = "#0000FF",
    green = "#008000",
}

@Directive({
    selector: "[appSetBottomBorder]",
})
export class BottomBorderDirective implements OnInit {
    @Input() appSetBottomBorder = "";

    currentDate: Date = new Date();
    searchElementDate!: Date;
    color = "";

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.searchElementDate = new Date(this.appSetBottomBorder);
        this.getSpecificColor();

        this.renderer.setStyle(
            this.elRef.nativeElement,
            "border-bottom",
            `4px solid ${this.color}`
        );
    }

    DifferenceInDays(itemDate: Date, currentDate: Date): number {
        const msInDay = 24 * 60 * 60 * 1000;

        return Math.round(
            Math.abs(Number(currentDate) - Number(itemDate)) / msInDay
        );
    }

    getSpecificColor() {
        const remainingDays = this.DifferenceInDays(
            this.searchElementDate,
            this.currentDate
        );

        if (remainingDays > 180) {
            this.color = Colors.red;
        } else if (remainingDays < 30 && remainingDays < 180) {
            this.color = Colors.yellow;
        } else if (remainingDays < 7 && remainingDays < 30) {
            this.color = Colors.blue;
        } else if (remainingDays < 7) {
            this.color = Colors.green;
        }
    }
}
