import React from 'react';
import {Button, Image, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {AddTrainer} from '../../store/actions/TrainerActions';
import {TrainerEditProps} from './trainerEdit.props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrainerEditScreen = (props: TrainerEditProps) => {
  const {trainerStore} = props;
  const {selectedTrainer} = trainerStore;
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');

  const saveTrainer = () => {
    dispatch(AddTrainer(selectedTrainer));
  };

  return (
    <>
      <TextInput placeholder="name" value={selectedTrainer.name} />
      <TextInput placeholder="last name" value={selectedTrainer.lastname} />
      <Image
        source={{uri: selectedTrainer.picture}}
        style={{width: 100, height: 100}}
      />
      <Button title="achu" />
      <TextInput placeholder="genre" value={selectedTrainer.genre} />
      <TextInput placeholder="location" value={selectedTrainer.location} />
      <TextInput placeholder="phone" value={selectedTrainer.phone} />
      <TextInput placeholder="birthdate" value={selectedTrainer.birthdate} />

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
