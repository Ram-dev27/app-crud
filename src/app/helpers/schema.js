import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  address1: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address2: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(1, "Too short!")
    .max(50, "Too Long!")
    .required("City name is required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("State name is required"),
  zipCode: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Zip code is required"),
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Country name is required"),
  qualification: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Qualification required"),
  comments: Yup.string().min(2, "Too Short!").required("Comments is required"),
});
