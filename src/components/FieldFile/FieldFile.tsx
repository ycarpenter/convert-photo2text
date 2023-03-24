import { StyledInputFileBtn } from './InputFile.styled'

console.log('ter')

export default function FieldFile(): JSX.Element {
  return (
    <label htmlFor='uploadPic'>
      <StyledInputFileBtn
        type='file'
        name='uploadPic'
        id='uploadPic'
        accept='image/png, image/jpeg'
      />
    </label>
  )
}
