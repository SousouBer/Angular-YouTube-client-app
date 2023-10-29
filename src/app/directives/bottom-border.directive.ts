import {
    Directive, ElementRef, Input, OnInit, Renderer2
} from "@angular/core";

@Directive({
    selector: "[appSetBottomBorder]",
})
export class BottomBorderDirective implements OnInit {
    @Input() appSetBottomBorder!: string;

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
            this.color = "#ff0000";
        } else if (remainingDays < 30 && remainingDays < 180) {
            this.color = "FFFF00";
        } else if (remainingDays < 7 && remainingDays < 30) {
            this.color = "#008000";
        } else if (remainingDays < 7) {
            this.color = "#0000FF";
        }
    }
}
