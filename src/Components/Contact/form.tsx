//import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string,
  email: string,
  phoneNumber: string | number,
  comments?: string
}

export const FormSubmit = () => {
  const { register, errors, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input name="Name" ref={register({ required: true })} id="name" placeholder="Name:" />
        {errors.name && <div>Name is Required</div>}
      </div>
      <div>
        <input name="Email" ref={register({ required: true })} id="email" placeholder="Email:" />
        {errors.name && <div>Email is Required</div>}
      </div>
      <div>
        <input name="Phone Number" ref={register({ required: true })} id="phone number" placeholder="Phone Number:" />
        {errors.name && <div>Phone Number is Required</div>}
      </div>
      <div>
        <input name="Comments" ref={register} id="comments" placeholder="Comments:" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}