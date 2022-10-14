import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import CourseGoalList from './components/CourseGoals/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput';
import '../src/styles/global.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText: string) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: uuidv4() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: string) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
