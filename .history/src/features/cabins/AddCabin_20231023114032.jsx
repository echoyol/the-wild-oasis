import { useState } from 'react'
import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'

function AddCabin() {
  const [IsOpenModal, setIsOpenModal] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {IsOpenModal && <CreateCabinForm />}
    </div>
  )
}

export default AddCabin
