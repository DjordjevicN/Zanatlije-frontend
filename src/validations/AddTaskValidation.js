import * as yup from 'yup'

export const AddTaskValidation = yup.object().shape({
    taskTitle: yup.string().required('Naslov nije dodat'),
    taskPrice: yup.number(),
    taskAddress: yup.string(),
    taskTime: yup.string(),
    taskBody: yup.string()
})

