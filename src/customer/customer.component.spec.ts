import { TestBed, async } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'customer-plugin-module'`, () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('customer-plugin-module');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('customer-plugin-module app is running!');
  });
});
