import * as yup from 'yup'

export const SignInUserValidation = yup.object().shape({
    userName: yup.string()
        .required('Ime nije uneto')
        .max(40, 'Presli dozvoljeni broj karaktera za ime'),
    email: yup.string()
        .required('Email nije unet')
        .email('Email mora da bude u formatu email-a'),
    password: yup.string()
        .required('Password nije unet')
        .min(6, 'Password mora da ima vise od 6 karakters')

})