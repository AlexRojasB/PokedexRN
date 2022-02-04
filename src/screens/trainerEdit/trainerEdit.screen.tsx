import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Button, Image, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {useForm} from '../../hooks/useForm';
import {Trainer} from '../../models';
import {AddTrainer} from '../../store/actions/TrainerActions';
import {TrainerEditProps} from './trainerEdit.props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrainerEditScreen = (props: TrainerEditProps) => {
  const {trainerStore, navigation} = props;
  const {selectedTrainer} = trainerStore;
  const dispatch = useDispatch();
  const {
    state,
    name,
    lastname,
    picture,
    genre,
    location,
    phone,
    birthdate,
    onChange,
  } = useForm({} as Trainer);

  const saveTrainer = () => {
    var trainerSelected = state;
    trainerSelected.id = trainerStore.trainers.length + 1;
    dispatch(AddTrainer(trainerSelected));
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
        placeholder="last name"
        value={lastname}
        onChange={({nativeEvent}) => onChange('lastname', nativeEvent.text)}
      />
      <Image source={{uri: picture}} style={{width: 100, height: 100}} />
      <Button title="achu" />
      <TextInput
        placeholder="genre"
        value={genre}
        onChange={({nativeEvent}) => onChange('genre', nativeEvent.text)}
      />
      <TextInput
        placeholder="location"
        value={location}
        onChange={({nativeEvent}) => onChange('location', nativeEvent.text)}
      />
      <TextInput
        placeholder="phone"
        value={phone}
        onChange={({nativeEvent}) => onChange('phone', nativeEvent.text)}
      />
      <TextInput
        placeholder="birthdate"
        value={birthdate}
        onChange={({nativeEvent}) => onChange('birthdate', nativeEvent.text)}
      />

      <Button title="achu" onPress={() => saveTrainer()} />
    </>
  );
};
const mapStateToProps = state => {
  return {
    trainerStore: state.trainers,
  };
};

export default connect(mapStateToProps)(TrainerEditScreen);
