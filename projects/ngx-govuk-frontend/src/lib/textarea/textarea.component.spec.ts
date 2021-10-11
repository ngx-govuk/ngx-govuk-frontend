import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { FormErrorDirective } from '../directives';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { GovukValidators } from '../error-message/govuk-validators';
import { NgxGovukFrontendModule } from '../ngx-govuk-frontend.module';
import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  @Component({
    template: '<div govuk-textarea [formControl]="control" [maxLength]="maxLength"></div>',
  })
  class TestComponent {
    control = new FormControl();
    maxLength?: number;
  }

  let component: TextareaComponent;
  let hostComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserModule, NgxGovukFrontendModule],
      declarations: [TestComponent],
    })
      .overrideModule(BrowserModule, { set: { entryComponents: [ErrorMessageComponent] } })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(TextareaComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the textarea', () => {
    hostComponent.control.disable();
    fixture.detectChanges();

    const hostElement: HTMLElement = fixture.nativeElement;
    const textarea = hostElement.querySelector<HTMLTextAreaElement>('textarea');

    expect(textarea!.disabled).toBeTruthy();
  });

  it('should assign value', () => {
    const stringValue = 'This is a test';
    hostComponent.control.patchValue(stringValue);
    fixture.detectChanges();

    const hostElement: HTMLElement = fixture.nativeElement;
    const textarea = hostElement.querySelector<HTMLTextAreaElement>('textarea');
    expect(textarea!.value).toEqual(stringValue);
  });

  it('should emit value', () => {
    const stringValue = 'This is a test';
    const textarea = fixture.debugElement.query(By.css('textarea'));

    expect(hostComponent.control.value).toBeNull();

    textarea.triggerEventHandler('input', { target: { value: stringValue } });

    fixture.detectChanges();

    expect(hostComponent.control.value).toEqual(stringValue);
  });

  it('should show character count info and error', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('.govuk-character-count__message')).toBeNull();

    hostComponent.maxLength = 10;
    hostComponent.control.clearValidators();
    hostComponent.control.setValidators(GovukValidators.maxLength(10, 'no more than 10'));
    hostComponent.control.updateValueAndValidity();
    fixture.detectChanges();

    expect(element.querySelector('.govuk-character-count__message')).not.toBeNull();
    expect(element.querySelector('.govuk-character-count__message.govuk-error-message')).toBeNull();

    const stringValue = '12345678901';
    hostComponent.control.setValue(stringValue);
    fixture.detectChanges();

    expect(element.querySelector('.govuk-character-count__message.govuk-error-message')).toBeTruthy();
    expect(element.querySelector('.govuk-character-count__message.govuk-error-message')!.textContent!.trim()).toEqual(
      'You have 1 characters too many',
    );
    expect(element.querySelector('.govuk-form-group--error')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('.govuk-error-message')[0].textContent).toContain('no more than 10');
  });
});
