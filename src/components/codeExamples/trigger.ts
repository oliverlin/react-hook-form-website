export default `import React from "react"
import useForm from "react-hook-form"

export default function YourForm() {
  const { register, triggerValidation, errors } = useForm()
  console.log(errors)
  
  return (
    <form>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register({ required: true })} />
      <button
        type="button"
        onClick={async () => {
          console.log("firstName", await triggerValidation({ name: 'firstName' }));
        }}
      >
        Trigger
      </button>
    </form>
  )
}`
