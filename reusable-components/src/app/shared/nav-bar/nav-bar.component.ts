import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PermissionService } from '../../core/services/permission.service';

@Component({
  selector: 'dm-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  permissionService = inject(PermissionService);

  onCLick() {
    this.permissionService.permissions.table.v1 =
      !this.permissionService.permissions.table.v1;
  }
}
