import * as yup from 'yup';

export default yup.object().shape({
    name:yup.string()
    .required(),
    image:yup.mixed()
})