import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../../icons/icons.module';

import { NgIcon } from '@ng-icons/core';

import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
  imports: [CommonModule, IconsModule, NgIcon],
})
export class SkillsModule {}
