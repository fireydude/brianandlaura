import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { DayComponent } from './components/day/day.component';
import { TravelComponent } from './components/travel/travel.component';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { InviteComponent } from './components/invite/invite.component';
import { GiftComponent } from './components/gift/gift.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        DayComponent,
        TravelComponent,
        AccomodationComponent,
        InviteComponent,
        GiftComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'day', pathMatch: 'full' },
            { path: 'day', component: DayComponent },
            { path: 'travel', component: TravelComponent },
            { path: 'accomodation', component: AccomodationComponent },
            { path: 'invite', component: InviteComponent },
            { path: 'gift', component: GiftComponent },
            { path: '**', redirectTo: 'day' }
        ])
    ]
})
export class AppModuleShared {
}
