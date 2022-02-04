import React from 'react';
import {Button, FlatList, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {TeamListProps} from './teamList.props';
import {SelectedTrainer} from '../../store/actions/TrainerActions';
import {TeamRow} from '../../components/teamRow/teamRow.component';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <TeamRow
      key={item.id}
      teamId={item.id}
      trainerImage={item.picture}
      trainerName={item.name}
      teamName={item.teamName}
    />
  </TouchableOpacity>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TeamListScreen = (props: TeamListProps) => {
  const {trainerStore, navigation} = props;
  const dispatch = useDispatch();

  const getTeamDetail = (teamId: number | null) => {
    if (teamId) {
      dispatch(SelectedTrainer(trainerStore.teams[teamId]));
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Team',
      }),
    );
  };

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => getTeamDetail(item.id)} />;
  };

  return (
    <>
      <FlatList
        data={trainerStore.teams}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Nuevo Equipo" onPress={() => getTeamDetail(null)} />
    </>
  );
};
const mapStateToProps = state => {
  return {
    trainerStore: state.trainers,
  };
};

export default connect(mapStateToProps)(TeamListScreen);
