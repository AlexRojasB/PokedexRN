import {Trainer} from '../../models';
import {
  addTrainer,
  loadTrainers,
  selectedTrainer,
} from '../actions/TrainerActionTypes';

interface TrainerState {
  trainers: Trainer[];
  selectedTrainer: Trainer;
}

const INITIAL_STATE: TrainerState = {
  trainers: [],
  selectedTrainer: {} as Trainer,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case loadTrainers:
      return {
        ...state,
        trainers: [...action.payload],
      };
    case selectedTrainer:
      return {
        ...state,
        selectedTrainer: action.payload,
      };
    case addTrainer:
      console.log('addTrainer', action.payload);
      return {
        ...state,
        trainers: [...state.trainers, action.payload],
      };
    default:
      return state;
  }
};
