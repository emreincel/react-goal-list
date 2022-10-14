import React from 'react';
import styles from './styles.module.css';
import IGoalModel from '../../../libs/models/goal.model';
import CourseGoalItem from '../CourseGoalItem';

type TProps = {
  items: IGoalModel[];
  onDeleteItem: (id: string) => void;
};

const CourseGoalList = ({ items, onDeleteItem }: TProps) => {
  return (
    <ul className={styles['goal-list']}>
      {items.map(goal => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          <span>{goal.text}</span>
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
