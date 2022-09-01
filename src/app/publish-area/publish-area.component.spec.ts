import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAreaComponent } from './publish-area.component';

describe('PublishAreaComponent', () => {
  let component: PublishAreaComponent;
  let fixture: ComponentFixture<PublishAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
