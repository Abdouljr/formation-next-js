import * as yup from "yup";

export const bookSchema = yup.object({
  titre: yup
    .string()
    .required("Le titre est obligatoire")
    .min(2, "Le titre doit avoir au moins 2 caractères"),
  auteur: yup
    .string()
    .required("L'auteur est obligatoire")
    .min(2, "L'auteur doit avoir au moins 2 caractères"),
  reference: yup
    .string()
    .required("La référence est obligatoire")
    .min(3, "La référence doit avoir au moins 3 caractères"),
  prix: yup
    .number()
    .required("Le prix est obligatoire")
    .integer("Le prix doit être un entier")
    .min(0, "Le prix doit être supérieur ou égal à 0"),
  stock: yup
    .number()
    .required("Le prix est obligatoire")
    .integer("Le prix doit être un entier")
    .min(0, "Le prix doit être supérieur ou égal à 0"),
});
