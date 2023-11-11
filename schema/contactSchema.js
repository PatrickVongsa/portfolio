import { object, string, number } from 'yup';

export const contactSchema = object({
    firstname: string().required('Ce champ est requis'),
    lastname: string().required('Ce champ est requis'),
    email: string().email('Merci de renseigner un e-mail valide').required('Ce champ est requis'),
    message: string().required('Ce champ est requis').min(10, 'Votre message doit être supérieur à 10 caractères'),
});