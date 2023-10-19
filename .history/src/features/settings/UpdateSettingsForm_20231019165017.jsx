import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import useSetting from './useSetting'

function UpdateSettingsForm() {
  const { isLoading, settings:{minBookingLength,maxBookingLength,maxGuestsPerBooking,breakfastPrice} } = useSetting()

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          defaultValue={}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
