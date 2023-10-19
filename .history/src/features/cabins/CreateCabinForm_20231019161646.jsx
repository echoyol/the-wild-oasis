import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'

import { useForm } from 'react-hook-form'
import { useCreateCabin } from './useCreateCabin'
import { useEditCabin } from './useEditCabin'

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const { errors } = formState

  const { isCreating, createCabin } = useCreateCabin()
  const { isEditing, editCabin } = useEditCabin()

  const isWorking = isCreating || isEditing

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            console.log(data)
            reset()
          },
        }
      )
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            console.log(data) // This data is not the data the form submitted,in fact it is the final data where image is a URL
            reset()
          },
        }
      )
    //console.log(data)
  }

  function onError(err) {
    // console.log(err)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label='Cabin name'
        error={errors?.name?.message}
      >
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', {
            required: 'This field is required ',
          })}
        />
      </FormRow>

      <FormRow
        label='Maximum capacity'
        error={errors?.maxCapacity?.message}
      >
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required ',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Regular price'
        error={errors?.regularPrice?.message}
      >
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required ',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Discount'
        error={errors?.discount?.message}
      >
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          disabled={isWorking}
          {...register('discount', {
            required: 'This field is required ',
            validate: (value) =>
              Number(getValues().regularPrice) > Number(value) ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          disabled={isWorking}
          {...register('description', { required: 'This field is required ' })}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          id='image'
          accept='image/*'
          {...register('image', {
            required: isEditSession ? false : 'This field is required ',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
