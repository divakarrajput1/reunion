import {
    useReactTable,
    getCoreRowModel, 
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getGroupedRowModel,
    } from '@tanstack/react-table'
  import mData from '../MOCK_DATA.json'
  import { useMemo } from 'react'
  import {DateTime} from 'luxon'
  import { useState } from 'react'
  export default function BasicTable () {
  
      const data = useMemo(() => mData, [])
      const [filtering, setFiltering] = useState('')
      const [grouping, setGrouping] = useState([])
      const columns = [
          {
              header: 'ID',
              accessorKey : 'id',
          },
          {
              header: 'Name',
              accessorKey : 'name',
          },
          {
              header: 'Category',
              accessorKey : 'category',
          },
          {
              header: 'Subcategory',
              accessorKey : 'subcategory',
          },
          {
              header: 'CreatedAt',
              accessorKey : 'createdAt',
              cell : info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
          },
          {
              header: 'UpdatedAt',
              accessorKey : 'updatedAt',
              cell : info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
          },
          {
              header: 'Price',
              accessorKey : 'price',
          },
          {
              header: 'Sale Price',
              accessorKey : 'sale_price',
          },
      ]
      const [sorting, setSorting] = useState([])
      const table = useReactTable ({
          data, 
          columns,
          getCoreRowModel: getCoreRowModel(),
          getPaginationRowModel: getPaginationRowModel(),
          getSortedRowModel: getSortedRowModel(),
          getFilteredRowModel: getFilteredRowModel(),
          getGroupedRowModel: getGroupedRowModel(),
          state: {
            sorting: sorting,
            globalFilter: filtering,
            grouping: grouping,
          },
          onSortingChange: setSorting,
          onGlobalFilterChange: setFiltering,
          onGroupingChange: setGrouping,
      })
  
      return (
         <div className='w3-container'>
          <strong>Filtering:</strong>
          <input 
          type='text'
          value={filtering}
          onChange={e => setFiltering(e.target.value)}
        />
        <div>
          {/* Buttons to group by Category and Subcategory */}
          <button onClick={() => setGrouping(['category'])}>Group by Category</button>
          <button onClick={() => setGrouping(['subcategory'])}>Group by Subcategory</button>
          <button onClick={() => setGrouping([])}>Clear Grouping</button>
        </div>
          <table className='w3-table-all'>
          <thead>
          {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {header.isPlaceholder ? null : (
                      <div>
                      {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: '🔼', desc: '🔽' }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                        </div>
                      )}
                  </th>
                ))}
              </tr>
            ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
      
              </tbody>
          </table>
          <div>
            <button onClick={() => table.setPageIndex(0)}> First Page</button>
            <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}> Previous Page</button>
            <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}> Next Page</button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}> Last Page</button>
          </div>
      </div>
      )
  }