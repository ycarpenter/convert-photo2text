import { InputFile } from './InputFile.styled'

export default function FieldFile() {
  return (
    <label htmlFor='uploadPic'>
      Please, upload file to exacted text
      <InputFile type='file' name='uploadPic' id='uploadPic' />
    </label>
  )
}
