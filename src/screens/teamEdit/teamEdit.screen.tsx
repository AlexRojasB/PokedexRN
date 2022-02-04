import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Button, Image, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {useForm} from '../../hooks/useForm';
import {Team} from '../../models';
import {AddTeam} from '../../store/actions/TrainerActions';
import {TeamEditProps} from './teamEdit.props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrainerEditScreen = (props: TeamEditProps) => {
  const {trainerStore, navigation} = props;
  const {selectedTeam} = trainerStore;
  const dispatch = useDispatch();
  const {
    state,
    name,
    id,
    pokemons,
    teamName,
    trainerId,
    trainerPicture,
    onChange,
  } = useForm({} as Team);

  const saveTeam = () => {
    var teamSelected = state;
    teamSelected.id = trainerStore.teams.length + 1;
    dispatch(AddTeam(teamSelected));
    goToTrainers();
  };

  const goToTrainers = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <>
      <TextInput
        placeholder="name"
        value={name}
        onChange={({nativeEvent}) => onChange('name', nativeEvent.text)}
      />
      <TextInput
        placeholder="team name"
        value={teamName}
        onChange={({nativeEvent}) => onChange('teamName', nativeEvent.text)}
      />
      <Image source={{uri: trainerPicture}} style={{width: 100, height: 100}} />
      <Button title="achu" />
      <Button title="achu" onPress={() => saveTeam()} />
    </>
  );
};
const mapStateToProps = state => {
  return {
    trainerStore: state.trainers,
  };
};

export default connect(mapStateToProps)(TrainerEditScreen);
