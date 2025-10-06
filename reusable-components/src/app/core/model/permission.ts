export type Module =
  | 'table'
  | 'stepper'
  | 'pagination'
  | 'forms'
  | 'popup'
  | 'tabs';

// export interface Permissions {
//   [k: string]: PermissionFlags;
//   allowed: boolean | undefined;
// }

// export interface PermissionFlags {
//   read?: boolean;
//   write?: boolean;
// }

export function loadPermission() {
  return {
    table: {
      v1: {
        read: false,
        write: false,
      },
      v2: {
        read: true,
        write: false,
      },
      allowed: true,
    },
    popup: {
      v1: {
        read: true,
        write: false,
      },
      v2: {
        read: false,
        write: false,
      },
      allowed: true,
    },
    pagination: {
      v1: {
        read: true,
        write: false,
      },
      v2: {
        read: false,
        write: false,
      },
      allowed: true,
    },
    tab: {
      v1: {
        read: true,
        write: false,
      },
      v2: {
        read: false,
        write: false,
      },
      allowed: true,
    },
    stepper: {
      read: true,
      write: true,
    },
    form: {
      v1: {
        read: true,
        write: false,
      },
      v2: {
        read: false,
        write: false,
      },
      allowed: true,
    },
  };
}
