import { computed, Injectable, linkedSignal, signal } from '@angular/core';

@Injectable()
export class TableDataService {
  constructor() {}

  tableData = signal<any[]>([
    {
      serialNumber: 1,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 2,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 3,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 4,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 5,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 6,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 7,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 8,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 9,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 10,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 11,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 12,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 13,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 14,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 15,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 16,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 17,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 18,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 19,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 20,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
  ]);

  recordsPerPage = signal<number[]>([5, 10, 20]);
  activePage = signal<number>(1);
  pageFromPagination = signal<number>(5);

  sort = signal<{ sortKey: string; sortDirection: 'asc' | 'desc' }>({
    sortKey: 'serialNumber',
    sortDirection: 'asc',
  });

  paginatedSortedData = computed(() => {
    const start = (this.activePage() - 1) * this.pageFromPagination();
    const end = start + this.pageFromPagination();
    const sliced = this.tableData().slice(start, end);

    const { sortKey: key, sortDirection: dir } = this.sort();
    if (!key || !dir) return sliced;

    return [...sliced].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string')
        return dir === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);

      return dir === 'asc' ? valA - valB : valB - valA;
    });
  });
}
