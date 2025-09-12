export function sortColumnV1(col: any, fullData: any[], order: 'asc' | 'desc') {
  fullData.sort((a, b) => {
    const key = col.field;
    const dir = order;
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'string' && typeof valB === 'string') {
      return dir === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return dir === 'asc' ? valA - valB : valB - valA;
  });

  return fullData;
}
