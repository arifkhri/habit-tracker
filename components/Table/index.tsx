import React from 'react';

declare interface TableProps<T> {
  data: { id: string, [key: string]: any }[] & T[];
  columns: {
    field: string;
    width?: string;
    title: string;
    render?: Function;
    className?: string;
    thProps?: React.ThHTMLAttributes<any>[];
    tdProps?: React.TdHTMLAttributes<any>[];
  }[];
  trProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
}

const Table = <T extends object>(props: TableProps<T>) => {
  const { columns, data, trProps } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {
            columns.map(({ title, thProps }) => (
              <th key={title} {...thProps}>{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.length > 0 ? (

            // showing data
            data.map((record) => (
              <tr key={record.id} {...trProps}>
                {
                  columns.map((column, index) => (
                    <td key={`${column.field}-${index}`} {...column.tdProps}>
                      {
                        column.render ? column.render(record[column.field], record) : record[column.field]
                      }
                    </td>
                  ))
                }
              </tr>
            ))

          ) : (
            // no data
            <tr>
              <td colSpan={columns.length}>Tidak ada data.</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;