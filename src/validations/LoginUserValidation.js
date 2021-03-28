import * as yup from 'yup'

export const LoginUserValidation = yup.object().shape({
    email: yup.string()
        .required('Email nije unet')
        .email('Email mora da bude u formatu email-a'),
    password: yup.string()
        .required('Password nije unet')
        .min(6, 'Password mora da ima vise od 6 karakters')

})