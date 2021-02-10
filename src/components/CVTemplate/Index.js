import React from 'react';
import { generateCV } from './data';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import RowingIcon from '@material-ui/icons/Rowing';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Modal from './Modal';
import { Root, Side, Avatar, Header, Emoji, SideHeader, Info, ListItem, ListItemHalf, Icon, Button } from './styled';


function Index() {
  const [data, setData] = React.useState('');
  const [prompt, setPrompt] = React.useState({
    question: '',
    answer: ''
  });
  const [isActive, setIsActive] = React.useState('');
  const [startAgain, setStartAgain] = React.useState(false);

  React.useEffect(() => {
    setData(generateCV());
  }, []);

  React.useEffect(() => {
    setData(generateCV());
  }, [startAgain]);

  return (
    <Root>
      <Modal isActive={ isActive } setIsActive={ setIsActive } prompt={ prompt } />
      <Side>
        <Avatar avatar={ data.avatar } onClick={ () => {
          setPrompt(
            {
              question: data.gender.question,
              answer: data.gender.answer
            }
          );
          setIsActive('is-active');
        }

        } />
        {/* { data.gender && data.gender.question }
        { data.gender && data.gender.answer } */}
        <Header fontSize="24px" stringCase="uppercase" marginTop="20px" onClick={ () => {
          setPrompt(
            {
              question: data.name.question,
              answer: data.name.answer
            }
          );
          setIsActive('is-active');
        } }>
          { data.name && data.name.word }
        </Header>
        <Header fontSize="18px" marginBottom="40px" onClick={ () => {
          setPrompt(
            {
              question: data.occupation.question,
              answer: data.occupation.answer
            }
          );
          setIsActive('is-active');
        } }>
          { data.occupation && data.occupation.word } { data.likeOrNot === 'no' ? <Emoji>😞</Emoji> : <Emoji>😃</Emoji> }
        </Header>
        <Button onClick={ () => setStartAgain(!startAgain) } />
      </Side>
      <Side verticalAlignment="start">
        <SideHeader>
          Профайл
        </SideHeader>
        <Info>
          <ListItem>
            <ListItemHalf fontWeight="bold" onClick={ () => {
              setPrompt(
                {
                  question: data.birthPlace.question,
                  answer: data.birthPlace.answer
                }
              );
              setIsActive('is-active');
            } }><Icon><HomeIcon /></Icon>Месторождение</ListItemHalf>
            <ListItemHalf paddingLeft="10px" fontWeight="normal">: { data.birthPlace && data.birthPlace.word }</ListItemHalf>
          </ListItem>
          <ListItem>
            <ListItemHalf fontWeight="bold" onClick={ () => {
              setPrompt(
                {
                  question: data.currentPlace.question,
                  answer: data.currentPlace.answer
                }
              );
              setIsActive('is-active');
            } }><Icon><PlaceIcon /></Icon>Место проживания</ListItemHalf>
            <ListItemHalf paddingLeft="15px" fontWeight="normal">: { data.currentPlace && data.currentPlace.word }</ListItemHalf>
          </ListItem>
          <ListItem>
            <ListItemHalf fontWeight="bold" onClick={ () => {
              setPrompt(
                {
                  question: data.age.question,
                  answer: data.age.answer
                }
              );
              setIsActive('is-active');
            } }><Icon><EventIcon /></Icon>Возраст</ListItemHalf>
            <ListItemHalf paddingLeft="10px" fontWeight="normal">: { data.age && data.age.word }</ListItemHalf>
          </ListItem>
          <ListItem forList={ true }>
            <ListItemHalf fontWeight="bold" onClick={ () => {
              setPrompt(
                {
                  question: data.hobbies.question,
                  answer: data.hobbies.answer
                }
              );
              setIsActive('is-active');
            } }><Icon><RowingIcon /></Icon>Хобби</ListItemHalf>
            <ListItemHalf paddingLeft="10px" forList={ true } fontWeight="normal"> { data.hobbies && data.hobbies.word.map(item => (
              <p>{ item }</p>
            )) }</ListItemHalf>
          </ListItem>
          <ListItem forList={ true }>
            <ListItemHalf fontWeight="bold" onClick={ () => {
              setPrompt(
                {
                  question: data.skills.question,
                  answer: data.skills.answer
                }
              );
              setIsActive('is-active');
            } }><Icon><EqualizerIcon /></Icon>Навыки</ListItemHalf>
            <ListItemHalf paddingLeft="10px" fontWeight="normal" forList={ true }>{ data.skills && data.skills.word.map(item => (
              <p>{ item }</p>
            )) }</ListItemHalf>
          </ListItem>
          <ListItem forList={ true }>
            <ListItemHalf fontWeight="bold" onClick={ () => {
              setPrompt(
                {
                  question: data.languages.question,
                  answer: data.languages.answer
                }
              );
              setIsActive('is-active');
            } }><Icon><GTranslateIcon /></Icon>Языки</ListItemHalf>
            <ListItemHalf paddingLeft="10px" fontWeight="normal" forList={ true }>{ data.languages && data.languages.word.map(item => (
              <p>{ item }</p>
            )) }</ListItemHalf>
          </ListItem>
        </Info>
      </Side>
    </Root>
  );
}

export default Index;
