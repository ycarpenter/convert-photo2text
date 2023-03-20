import { FormEvent } from 'react'
import Buttons from '../components/Button/Buttons'
import FieldFile from '../components/FieldFile/FieldFile'
import { FormUpload } from './FormUpload.styled'

const sendForm = (e: FormEvent) => {
  e.preventDefault()
  console.log(e)
}

export default function Home() {
  return (
    <FormUpload
      autoComplete='off'
      onSubmit={sendForm}
    >
      <FieldFile />
      <Buttons />
    </FormUpload>
  )
}
