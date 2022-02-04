import {Trainer} from '../../models';
import {addTrainer, loadTrainers, selectedTrainer} from './TrainerActionTypes';

export const SelectedTrainer = (trainer: Trainer) => {
  return {
    type: selectedTrainer,
    payload: trainer,
  };
};

export const LoadTrainers = (trainers: Trainer[]) => {
  return {
    type: loadTrainers,
    payload: trainers,
  };
};

export const AddTrainer = (trainer: Trainer) => {
  return {
    type: addTrainer,
    payload: trainer,
  };
};
