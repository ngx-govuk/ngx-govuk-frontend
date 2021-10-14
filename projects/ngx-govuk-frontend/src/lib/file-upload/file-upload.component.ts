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
  selector: 'div[govukFileUpload],govuk-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent extends FormInput implements ControlValueAccessor {
  @Input()
  set label(label: string) {
    this.isLabelHidden = false;
    this.currentLabel = label;
  }

  @Input() accepted?: string;
  @Input() isMultiple = false;

  isLabelHidden = true;
  currentLabel = 'Legend';
  onChange!: (_: any) => any;
  onBlur!: () => any;

  constructor(
    @Self() @Optional() ngControl: NgControl,
    formService: FormService,
    @Optional() container: ControlContainer,
  ) {
    super(ngControl, formService, container);
  }

  onFileAttach(event: Event): void {
    this.control.patchValue((event?.target as HTMLInputElement)?.files);
  }

  writeValue(): void {}

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onBlur: any): void {
    this.onBlur = onBlur;
  }
}
