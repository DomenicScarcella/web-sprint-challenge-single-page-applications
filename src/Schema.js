import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('ERROR: Name is required')
        .min(2, 'ERROR: Name must be at least 2 characters long'),
})

export default formSchema