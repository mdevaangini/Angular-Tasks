export function sortColumn(col: any, fullData: any[], order: 'asc' | 'desc') {
  // console.log(data);
  // console.log(data[col.field]);
  // console.log(col.field);
  // console.log(fullData);

  const values = fullData.map((row) => row[col.field]);

  console.log(values);

  values.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
    }
    return order === 'asc' ? a - b : b - a;
  });

  return fullData.map((row, i) => ({
    ...row,
    [col.field]: values[i],
  }));
}
