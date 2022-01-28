import * as yup from 'yup'

export const EditUserServiceValidation = yup.object().shape({
    serviceCategory: yup.string().required('Kategorija mora da bude popunjena (eg. Ciscenje, Moler, Snajder '),
    serviceDescription: yup.string(),
    servicePrice: yup.number(),


})