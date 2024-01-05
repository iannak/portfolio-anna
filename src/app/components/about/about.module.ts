import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SkillsModule } from '../skills/skills.module';

@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent],
  imports: [CommonModule, SkillsModule],
})
export class AboutModule {}
