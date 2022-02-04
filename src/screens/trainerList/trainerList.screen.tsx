import React from 'react';
import {
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {TrainerListProps} from './trainerList.props';
import {TrainerRow} from '../../components/trainerRow/trainerRow.component';
import {SelectedTrainer} from '../../store/actions/TrainerActions';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <TrainerRow
      key={item.id}
      trainerId={item.id}
      traineLocation={item.location}
      trainerImage={item.picture}
      trainerName={item.name}
      trainerPhone={item.phone}
    />
  </TouchableOpacity>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrainerListScreen = (props: TrainerListProps) => {
  const {trainerStore, navigation} = props;
  const dispatch = useDispatch();

  const getTrainerDetail = (trainerId: number | null) => {
    if (trainerId) {
      dispatch(SelectedTrainer(trainerStore.trainers[trainerId]));
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Trainer',
      }),
    );
  };


  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => getTrainerDetail(item.id)} />;
  };

  return (
    <>
      <FlatList
        data={trainerStore.trainers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Nuevo Entrenador" onPress={() => getTrainerDetail(null)} />
    </>
  );
};
const mapStateToProps = state => {
  return {
    trainerStore: state.trainers,
  };
};

export default connect(mapStateToProps)(TrainerListScreen);
