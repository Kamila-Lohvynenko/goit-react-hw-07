import { VscAccount, VscCallOutgoing } from 'react-icons/vsc';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import toast from 'react-hot-toast';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>
          <VscAccount /> {name}
        </p>
        <p>
          <VscCallOutgoing /> {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() =>
          dispatch(deleteContact(id))
            .unwrap()
            .then(() => {
              toast.success('You have deleted the contact successfully!');
            })
            .catch(() => toast.error('You have not deleted the contact!'))
        }
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
