import * as yup from 'yup'

export const EditUserInfoValidation = yup.object().shape({
    userName: yup.string(),
    email: yup.string().email('Email mora da bude u formatu email-a'),
    userPhoneNumber: yup.string(),
    userAddress: yup.string(),
    aboutMe: yup.string(),

})