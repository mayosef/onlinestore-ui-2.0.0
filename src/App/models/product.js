import * as yup from 'yup';


export default yup.object().shape({
    title:yup.string(),
    // .required(),
    subcategoryId:yup.string(),
    // .required(),
    price:yup.number(),
    // .required(),
    brand:yup.string(),
    description:yup.string(),
    image:yup.mixed(),
})