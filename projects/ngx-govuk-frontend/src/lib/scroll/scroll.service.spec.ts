import { ViewportScroller } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ScrollService } from './scroll.service';

describe('FormService', () => {
  let service: ScrollService;
  let router: Router;
  let viewportScroller: ViewportScroller;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(ScrollService);
    router = TestBed.inject(Router);
    viewportScroller = TestBed.inject(ViewportScroller);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should skip fragment scroll if provided with the scrollSkip flag', () => {
    const scrollPositionSpy = spyOn(viewportScroller, 'scrollToPosition').and.stub();
    const scrollAnchorSpy = spyOn(service as any, 'focusTargetFragment').and.stub();
    spyOn(router, 'getCurrentNavigation').and.returnValue({ extras: { state: { scrollSkip: true } } } as any);
    (router.events as any).next(new Scroll(new NavigationEnd(1, '', ''), null, 'test'));

    expect(scrollPositionSpy).not.toHaveBeenCalled();
    expect(scrollAnchorSpy).not.toHaveBeenCalled();
  });

  it('should scroll to fragment if not provided with the scrollSkip flag', () => {
    const scrollPositionSpy = spyOn(viewportScroller, 'scrollToPosition').and.stub();
    const scrollAnchorSpy = spyOn(service as any, 'focusTargetFragment').and.stub();
    spyOn(router, 'getCurrentNavigation').and.returnValue({ extras: { state: {} } } as any);
    (router.events as any).next(new Scroll(new NavigationEnd(1, '', ''), null, 'test'));

    expect(scrollAnchorSpy).toHaveBeenCalled();
    expect(scrollPositionSpy).not.toHaveBeenCalled();
  });
});
