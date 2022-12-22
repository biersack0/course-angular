import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [CommonModule, FormsModule],
  exports: [SidebarComponent, NavbarComponent],
})
export class SharedModule {}
