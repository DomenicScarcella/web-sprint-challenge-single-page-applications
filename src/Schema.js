import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('ERROR: Name is required')
        .min(2, 'ERROR: Name must be at least 2 characters long'),
    cheese: yup.bool()
        .oneOf([true], [false]),
    pepperoni: yup.bool()
        .oneOf([true], [false]),
    onions: yup.bool()
        .oneOf([true], [false]),
    mushrooms: yup.bool()
        .oneOf([true], [false]),
    instr: yup.string()
        .trim(),
})

export default formSchema