import { Component, Input, Optional, Self } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NgControl } from '@angular/forms';

import { FormService } from '../form/form.service';
import { FormInput } from '../form/form-input';

/*
  eslint-disable
  @angular-eslint/prefer-on-push-component-change-detection,
  @typescript-eslint/no-empty-function
*/
@Component({
  selector: 'div[govuk-textarea]',
  templateUrl: './textarea.component.html',
})
export class TextareaComponent extends FormInput implements ControlValueAccessor {
  @Input() hint?: string;
  @Input() rows = '5';
  @Input() maxLength?: number;
  currentLabel = 'Insert text details';
  isLabelHidden = true;

  constructor(
    @Self() @Optional() ngControl: NgControl,
    formService: FormService,
    @Optional() container: ControlContainer,
  ) {
    super(ngControl, formService, container);
  }

  @Input() set label(label: string) {
    this.currentLabel = label;
    this.isLabelHidden = false;
  }

  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}

  setDisabledState(): void {}
}
