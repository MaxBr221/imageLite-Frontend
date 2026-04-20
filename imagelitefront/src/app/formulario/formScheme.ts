import * as Yup from 'yup'

export interface FormProps{
    name: string;
    tags: string;
    file: string | Blob;
}

export const formScheme: FormProps = {name: '', tags: '', file: ''}

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim()
            .required('Name é obrigatorio')
            .max(50, 'Name tem o limite de 50 caracteres'),
    tags: Yup.string().trim()
            .required('Tags é obrigatorio')
            .max(50, 'Tags tem o limite de 50 caracteres'),
    file: Yup.mixed<Blob>()
            .required('Selecione uma imagem para baixar')
            .test('size', 'Tamanho da foto não pode ser maior que 4 MB', (file) => {
                return file.size < 4000000;
            })
            .test('type', 'Os formatos aceitos: jpeg, gif, png', (file) =>{
                return file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png';
            })
})

