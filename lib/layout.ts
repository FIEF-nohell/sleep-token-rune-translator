export function toColumns(
  tokens: string[],
  columnHeight = Number.POSITIVE_INFINITY,
): string[][] {
  if (Number.isFinite(columnHeight) && columnHeight < 1) {
    return [];
  }

  const hasHeightLimit = Number.isFinite(columnHeight);
  const columns: string[][] = [];
  let currentColumn: string[] = [];

  for (const token of tokens) {
    // In column mode, spaces are treated as explicit column breaks.
    if (token === " ") {
      if (currentColumn.length > 0) {
        columns.push(currentColumn);
        currentColumn = [];
      }
      continue;
    }

    if (hasHeightLimit && currentColumn.length >= columnHeight) {
      columns.push(currentColumn);
      currentColumn = [];
    }

    currentColumn.push(token);
  }

  if (currentColumn.length > 0) {
    columns.push(currentColumn);
  }

  return columns;
}

export function fromColumns(
  columns: string[][],
  columnHeight = Number.POSITIVE_INFINITY,
): string {
  if (Number.isFinite(columnHeight) && columnHeight < 1) {
    return "";
  }

  const hasHeightLimit = Number.isFinite(columnHeight);
  const tokens: string[] = [];

  for (const column of columns) {
    const rowLimit = hasHeightLimit ? Math.min(column.length, columnHeight) : column.length;
    for (let row = 0; row < rowLimit; row += 1) {
      tokens.push(column[row]);
    }
  }

  return tokens.join("");
}
