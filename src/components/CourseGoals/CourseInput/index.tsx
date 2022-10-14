import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button';
import styles from './styles.module.css';

// type IDiv = {
//   invalid: boolean;
// };

// const FormControl = styled.div<IDiv>`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${invalid => (invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${invalid => (invalid ? 'red' : '#ccc')};
//     background: ${invalid => (invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

type TProps = {
  onAddGoal: (id: string) => void;
};

const CourseInput = ({ onAddGoal }: TProps) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseInput;

////// With Styled-components //////

// return (
//     <form onSubmit={formSubmitHandler}>
//       <FormControl invalid={!isValid}>
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </FormControl>
//       <Button>Add Goal</Button>
//     </form>
//   );
// };
