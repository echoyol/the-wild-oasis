import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'
import Modal from '../../ui/Modal'

function AddCabin() {
  return (
    <Modal>
      <Modal.open opens='cabin-form'>
        <Button>Add new cabin</Button>
      </Modal.open>
      <Modal.window name='cabin-form'>
        <CreateCabinForm />
      </Modal.window>

      {/* <Modal.Open opens='table'>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  )
}

// function AddCabin() {
//   const [IsOpenModal, setIsOpenModal] = useState(false)

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {IsOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   )
// }

export default AddCabin
