import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string()
  .required("Name is missing") .trim() .min(2,'The field should contain at least 2 characters'),
  lastName: yup.string()
  .required("Surname is missing") .trim() .min(2,'The field should contain at least 2 characters'),
  email: yup
    .string()
    .email("E-mail is invalid")
    .trim()
    .test(
      'is-valid-domain',
      'E-mail is invalid',
      value => {
        if (!value) return true; // If value is empty, let the required validation handle it
        const [, domain] = value.split('@');
        if (domain) {
          const domainParts = domain.split('.');
          if (domainParts.length > 1) {
            const afterDot = domainParts[domainParts.length - 1];
            return !/\d/.test(afterDot); // Check if characters after the dot contain any numbers
          }
        }
        return true;
      }
    )
    .required("E-mail is missing"),
  message: yup
    .string()
    .trim()
    .min(1, "Message text is missing")
    .max(3000, "The message must contain a maximum of 3000 characters")
    .required("Message text is missing"),
});

