import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent }                     from './app.component';

describe('AppComponent', function() {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it('should create component', () => expect(comp).toBeDefined() );
});
