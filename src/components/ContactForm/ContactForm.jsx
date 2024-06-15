import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short, enter from 3 letters')
      .max(50, 'Too long, enter uo to 50 letters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short, enter from 3 characters')
      .max(50, 'Too long, enter uo to 50 characters')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        dispatch(
          addContact({
            id: Date.now(),
            ...values,
          })
        );

        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" id={nameFieldId} className={css.input} />
        <ErrorMessage name="name" component="p" className={css.message} />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field name="number" id={phoneFieldId} className={css.input} />
        <ErrorMessage name="number" component="p" className={css.message} />
        <button type="submit" className={css.button}>
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
