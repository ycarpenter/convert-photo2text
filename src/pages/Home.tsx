import { FormEvent } from 'react'
import FieldFile from '../components/FieldFile/FieldFile'
import FormButton from '../components/Button/Button'
import { FormUpload } from './FormUpload.styled'

const sendForm = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(e)
}

export default function Home(): JSX.Element {
  return (
    <FormUpload
      autoComplete='off'
      onSubmit={sendForm}
    >
      <FieldFile />
      <FormButton />
    </FormUpload>
  )
}
