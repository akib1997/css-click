import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FlexOutputComponent } from './pages/flexbox/flex-output/flex-output.component';
import { FlexFormComponent } from './pages/flexbox/flex-form/flex-form.component';
import { CssCodePipe } from './shared/pipes/cssCode.pipe';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { SuccessMessageComponent } from './shared/components/success-message/success-message.component';
import { PropertyInformationComponent } from './components/property-information/property-information.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PropertyInformationComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    // Standalone
    TooltipComponent,
    SuccessMessageComponent
  ],
  providers: [CssCodePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
