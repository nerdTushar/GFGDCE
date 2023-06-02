import * as Yup from 'yup';

const phoneRegExp = /^[5-9][0-9]{9}$/;
// const regexp = /^[a-zA-Z0-9._]{1,30}$/;

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone_number: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please enter your number"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required("Please confirm password").oneOf([Yup.ref('password'), null],"Password must match"),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy')
    .required('You must agree to the terms and privacy policy'),
});