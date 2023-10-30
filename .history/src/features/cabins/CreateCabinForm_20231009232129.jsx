import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import FormRow from '../../ui/FormRow'

const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

const Label = styled.label`
  font-weight: 500;
`

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState

  const queryClient = useQueryClient()

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },
    onError: (err) => toast.error(err.message),
  })

  function onSubmit(data) {
    mutate(data)
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
          {...register('discount', {
            required: 'This field is required ',
            validate: (value) => value <= getValues().regularPrice || value, //'Discount should be less than regular price'
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.discription?.message}
      >
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          {...register('discription', { required: 'This field is required ' })}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          id='image'
          accept='image/*'
        />
      </FormRow>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow2>
    </Form>
  )
}

export default CreateCabinForm