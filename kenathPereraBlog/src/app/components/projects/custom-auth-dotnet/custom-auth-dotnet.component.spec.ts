import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAuthDotnetComponent } from './custom-auth-dotnet.component';

describe('CustomAuthDotnetComponent', () => {
  let component: CustomAuthDotnetComponent;
  let fixture: ComponentFixture<CustomAuthDotnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAuthDotnetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAuthDotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
