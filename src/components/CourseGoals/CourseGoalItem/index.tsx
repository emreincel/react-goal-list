import React from 'react';
import styles from './styles.module.css';

type TProps = {
  id: string;
  onDelete: (id: string) => void;
  children: JSX.Element | JSX.Element[];
};

const CourseGoalItem = ({ id, children, onDelete }: TProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className={styles['goal-item']} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
