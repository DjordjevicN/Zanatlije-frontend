import * as yup from 'yup'


export const ApplicationValidation = yup.object().shape({
    proposalPrice: yup.number().required('Cena nije dodata'),
    proposalInitMessage: yup.string().required('Opis nije dodat'),

})

