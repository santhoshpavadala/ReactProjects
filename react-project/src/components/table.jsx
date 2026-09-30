import TableRow from "./table-row";

function Table({ columns = [], data = [] }) {
  return (
    <div className="table-container">
      <table className="table">

        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              columns={columns}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Table;