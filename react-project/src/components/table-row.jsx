function TableRow({ row, columns = [] }) {
  return (
    <tr>
      {columns.map((column) => {

        if (column.key === "status") {
          const statusClass =
            row.status === "Active"
              ? "table-status-active"
              : "table-status-inactive";

          return (
            <td key={column.key}>
              <span className={`table-status ${statusClass}`}>
                {row.status}
              </span>
            </td>
          );
        }

        return (
          <td key={column.key}>
            {row[column.key]}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;