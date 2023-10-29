import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[{ value: 'all', label: 'All' }]}
      />
    </TableOperations>
  )
}

export default CabinTableOperations
