import { ValidationErrors } from '@angular/forms';

export interface NestedMessageValidationErrors {
  self: ValidationErrors | null;
  controls?: Record<string, NestedMessageValidationErrors> | NestedMessageValidationErrors[];
  path: string;
}
