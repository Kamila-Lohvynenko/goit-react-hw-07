import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import Loader from './Loader/Loader';
import { selectError, selectLoading } from '../redux/contactsSlice';
import Error from './Error/Error';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
