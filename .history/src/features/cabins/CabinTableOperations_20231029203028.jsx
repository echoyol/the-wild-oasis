import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'no discount' },
          { value: 'with-discount', label: 'with discount' },
        ]}
      />
      <SortBy options={[{ value: '', label: 'Sort by name (A-Z)' }]} />
    </TableOperations>
  )
}

export default CabinTableOperations
