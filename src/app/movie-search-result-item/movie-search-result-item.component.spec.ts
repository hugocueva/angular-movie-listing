import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchResultItemComponent } from './movie-search-result-item.component';

describe('MovieSearchResultItemComponent', () => {
  let component: MovieSearchResultItemComponent;
  let fixture: ComponentFixture<MovieSearchResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
