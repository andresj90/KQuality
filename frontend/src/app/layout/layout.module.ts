import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LateralPanelComponent } from './components/lateral-panel/lateral-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrganigramComponent } from './organigram/organigram.component';
import { DocumentMasterComponent } from './document-master/document-master.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    declarations: [LayoutComponent, NavBarComponent, LateralPanelComponent, FooterComponent, OrganigramComponent, DocumentMasterComponent]
})
export class LayoutModule {}