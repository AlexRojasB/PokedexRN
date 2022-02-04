import {Team, Trainer} from '../../models';
import {
  addTeam,
  addTrainer,
  selectedTeam,
  selectedTrainer,
} from '../actions/TrainerActionTypes';

interface TrainerState {
  trainers: Trainer[];
  selectedTrainer: Trainer;
  teams: Team[];
}

const INITIAL_STATE: TrainerState = {
  trainers: [],
  selectedTrainer: {} as Trainer,
  teams: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
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
    case addTeam:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case selectedTeam:
      return {
        ...state,
        selectedTeam: action.payload,
      };
    default:
      return state;
  }
};
