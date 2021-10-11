import { ChangeDetectorRef, Directive, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Directive()
export abstract class TabBaseDirective implements OnChanges {
  @Input() id!: string;
  @Input() label!: string;

  isSelected = new BehaviorSubject<boolean>(false);

  constructor(public cdRef: ChangeDetectorRef, public templateRef: TemplateRef<void>) {}

  ngOnChanges(): void {
    this.isSelected.next(this.isSelected.getValue());
  }
}
