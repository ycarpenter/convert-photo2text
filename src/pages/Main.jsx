import Buttons from '../components/Button/Buttons'
import FieldFile from '../components/FieldFile/FieldFile'
import FormUpload from './FormUpload.styled'

const sendForm = (e) => {
  e.preventDefault()
  console.log(e)
}

export default function Main() {
  return (
    <FormUpload autoComplete='off' onSubmit={() => sendForm}>
      <FieldFile />
      <Buttons />
    </FormUpload>
  )
}
