import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { GovukValidators } from '../error-message/govuk-validators';
import { NgxGovukFrontendModule } from '../ngx-govuk-frontend.module';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component1: TextInputComponent;
  let component2: TextInputComponent;
  let hostComponent1: TestComponent;
  let hostComponent2: TestNumericComponent;
  let fixture1: ComponentFixture<TestComponent>;
  let fixture2: ComponentFixture<TestNumericComponent>;

  @Component({
    template: `
      <div govuk-text-input [formControl]="control" [prefix]="prefix" [suffix]="suffix" label="First control"></div>
      <div govuk-text-input [formControl]="control" [prefix]="prefix" [suffix]="suffix">
        <ng-container govukLabel>Second control <span class="govuk-visually-hidden">hidden</span></ng-container>
      </div>
      <form [formGroup]="group">
        <div govuk-text-input formControlName="text" label="Form control"></div>
        <button type="submit">Submit</button>
      </form>
    `,
  })
  class TestComponent {
    control = new FormControl();
    group = new FormGroup(
      { text: new FormControl(null, { validators: GovukValidators.minLength(5, 'Enter a value') }) },
      { updateOn: 'submit' },
    );
    prefix?: string;
    suffix?: string;
  }

  @Component({
    template: '<div govuk-text-input [formControl]="control" inputType="number" [numberFormat]="format"></div>',
  })
  class TestNumericComponent {
    control = new FormControl(null, GovukValidators.max(5, 'Max test'));
    format?: string;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestNumericComponent, TestComponent],
      imports: [ReactiveFormsModule, NgxGovukFrontendModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture1 = TestBed.createComponent(TestComponent);
    fixture2 = TestBed.createComponent(TestNumericComponent);
    hostComponent1 = fixture1.componentInstance;
    hostComponent2 = fixture2.componentInstance;
    component1 = fixture1.debugElement.query(By.directive(TextInputComponent)).componentInstance;
    component2 = fixture2.debugElement.query(By.directive(TextInputComponent)).componentInstance;
    fixture1.detectChanges();
    fixture2.detectChanges();
  });

  it('should create', () => {
    expect(component1).toBeTruthy();
    expect(component2).toBeTruthy();
  });

  it('should disable the input', () => {
    hostComponent1.control.disable();
    fixture1.detectChanges();

    const hostElement: HTMLElement = fixture1.nativeElement;
    const input = hostElement.querySelector<HTMLInputElement>('input');

    expect(input!.disabled).toBeTruthy();
  });

  it('should assign value', () => {
    const stringValue = 'This is a test';
    hostComponent1.control.patchValue(stringValue);
    fixture1.detectChanges();

    const hostElement: HTMLElement = fixture1.nativeElement;
    const input = hostElement.querySelector<HTMLInputElement>('input');
    expect(input!.value).toEqual(stringValue);
  });

  it('should emit value', () => {
    const stringValue = 'This is a test';
    const input = fixture1.debugElement.query(By.css('input'));

    expect(hostComponent1.control.value).toBeNull();

    input.triggerEventHandler('input', { target: { value: stringValue } });

    fixture1.detectChanges();

    expect(hostComponent1.control.value).toEqual(stringValue);
  });

  it('should emit numeric value', () => {
    const numericValue = '2.';
    const input = fixture2.debugElement.query(By.css('input'));
    input.triggerEventHandler('blur', { target: { value: numericValue } });

    expect(hostComponent2.control.value).toEqual(2);
    expect(hostComponent2.control.value).not.toEqual('2.');
    expect(hostComponent2.control.value).not.toEqual('2');
  });

  it('should show and hide invalid number errors while typing if elements are not in form', () => {
    hostComponent2.control.markAsTouched();
    const element: HTMLElement = fixture2.nativeElement;
    expect(element.querySelector('.govuk-error-message')).toBeNull();

    const input = fixture2.debugElement.query(By.css('input'));
    input.triggerEventHandler('input', { target: { value: '2.a' } });
    fixture2.detectChanges();

    expect(element.querySelector('.govuk-error-message')).not.toBeNull();

    input.triggerEventHandler('input', { target: { value: '2.' } });
    fixture2.detectChanges();
    expect(element.querySelector('.govuk-error-message')).toBeNull();

    input.triggerEventHandler('input', { target: { value: '5.4' } });
    fixture2.detectChanges();
    expect(element.querySelector('.govuk-error-message')).not.toBeNull();
  });

  it('should display errors on submission', async () => {
    const formControl = fixture1.debugElement.query(By.css('input[name="text"]'));
    formControl.triggerEventHandler('input', { target: { value: 'abc' } });
    formControl.triggerEventHandler('blur', { target: { value: 'abc' } });
    fixture1.detectChanges();

    expect(hostComponent1.group.value).toEqual({ text: null });
    expect(formControl.nativeElement).not.toHaveClass('govuk-input--error');

    const form = fixture1.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', { target: form.nativeElement });
    fixture1.detectChanges();
    await fixture1.whenStable();
    fixture1.detectChanges();

    expect(hostComponent1.group.value).toEqual({ text: 'abc' });
    expect(formControl.nativeElement).toHaveClass('govuk-input--error');
  });

  it('should format on blur and revert on focus', () => {
    hostComponent2.format = '1.0-0';
    fixture2.detectChanges();
    const input = fixture2.debugElement.query(By.css('input'));
    input.triggerEventHandler('blur', { target: { value: '2000' } });

    expect(input.nativeElement.value).toEqual('2,000');

    input.triggerEventHandler('focus', null);

    expect(input.nativeElement.value).toEqual('2000');
  });

  it('should update form value on Enter keyboard event', () => {
    const input = fixture2.debugElement.query(By.css('input'));
    input.triggerEventHandler('input', { target: { value: '5.4' } });

    expect(hostComponent2.control.value).toEqual('5.4');
    expect(hostComponent2.control.value).not.toEqual(5.4);

    input.triggerEventHandler('keydown', { key: 'Enter', target: { value: '5.4' } });

    expect(hostComponent2.control.value).toEqual(5.4);
    expect(hostComponent2.control.value).not.toEqual('5.4');
  });

  it('should display a prefix or suffix if provided', () => {
    const element: HTMLElement = fixture1.nativeElement;

    const getPrefix = () => element.querySelector<HTMLDivElement>('.govuk-input__prefix');
    const getSuffix = () => element.querySelector<HTMLDivElement>('.govuk-input__suffix');

    expect(getPrefix()).toBeNull();
    expect(getSuffix()).toBeNull();

    hostComponent1.prefix = 'Eur';
    fixture1.detectChanges();

    expect(getPrefix()?.textContent).toEqual('Eur');
    expect(getSuffix()).toBeNull();

    hostComponent1.suffix = '%';
    fixture1.detectChanges();

    expect(getPrefix()?.textContent).toEqual('Eur');
    expect(getSuffix()?.textContent).toEqual('%');

    hostComponent1.prefix = undefined;
    fixture1.detectChanges();

    expect(getPrefix()).toBeNull();
    expect(getSuffix()?.textContent).toEqual('%');
  });

  it('should set null value for empty numeric input', () => {
    const input = fixture2.debugElement.query(By.css('input'));
    input.triggerEventHandler('input', { target: { value: '' } });

    expect(hostComponent2.control.value).toEqual('');
    expect(hostComponent2.control.value).not.toEqual(0);
    expect(hostComponent2.control.value).not.toEqual(null);

    input.triggerEventHandler('keydown', { key: 'Enter', target: { value: '' } });

    expect(hostComponent2.control.value).toEqual(null);
    expect(hostComponent2.control.value).not.toEqual(0);
    expect(hostComponent2.control.value).not.toEqual('');
  });

  it('should display custom labels', () => {
    const element: HTMLElement = fixture1.nativeElement;
    const labels = Array.from(element.querySelectorAll('label'));

    expect(labels.map((label) => label.textContent!.trim())).toEqual([
      'First control',
      'Second control hidden',
      'Form control',
    ]);
    expect(element.querySelector('.govuk-visually-hidden')!.textContent).toEqual('hidden');
  });
});
