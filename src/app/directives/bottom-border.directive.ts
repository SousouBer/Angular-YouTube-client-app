import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBottomBorder]',
})
export class bottomBorder implements OnInit {
  @Input('setBottomBorder') publishedAtProps!: string;

  currentDate: Date = new Date();
  searchElementDate!: Date;
  color: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.searchElementDate = new Date(this.publishedAtProps);
    this.getSpecificColor();

    this.renderer.setStyle(
      this.elRef.nativeElement,
      'border-bottom',
      '4px solid ' + this.color
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
      this.color = '#ff0000';
    } else if (30 > remainingDays && remainingDays < 180) {
      this.color = 'FFFF00';
    } else if (7 > remainingDays && remainingDays < 30) {
      this.color = '#008000';
    } else if (remainingDays < 7) {
      this.color = '#0000FF';
    }
  }
}
