import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListTemplateComponent } from './all.component';

describe('AllComponent', () => {
  let component: PostListTemplateComponent;
  let fixture: ComponentFixture<PostListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
