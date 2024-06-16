import css from './Error.module.css';
import { TbFaceIdError } from 'react-icons/tb';
const Error = () => {
  return (
    <div className={css.error}>
      <TbFaceIdError className={css.icon} />
      Ooops... something is wrong, try to reload the website
    </div>
  );
};

export default Error;
