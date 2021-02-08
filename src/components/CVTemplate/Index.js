import React from 'react';
import { generateCV } from './data';
import styled from 'styled-components';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import RowingIcon from '@material-ui/icons/Rowing';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Modal from './Modal';

const Root = styled.div`
  display:flex;
  justify-content:space-between;
  margin:0 auto;
  padding:6px;
  max-width:800px;
  min-height:300px;
  background-color:#FE5722;
  border-radius:6px;
`;

const Side = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  min-height:100%;
  justify-content:${props => props ? props.verticalAlignment : 'center'};
  align-items:center;
  flex:0.49;
  background-color:#FE440B;
  border-radius:6px;
  border-top:3px solid #FFE7DF;
  -webkit-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  -moz-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
`;

const Avatar = styled.div`
  width:200px;
  height:200px;
  border-radius:50%;
  border:1px solid #FFE7DF;
  background-image:${props => `url(${props.avatar})`};
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  margin-top:20px;
  -webkit-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  -moz-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  cursor:pointer;
`;

const Header = styled.h3`
  color:white;
  font-size: ${props => props.fontSize};
  text-transform:${props => props.stringCase};
  font-weight:bold;
  margin-top:${props => props.marginTop};
  cursor:pointer;
  margin-bottom:${props => props.marginBottom};
`;

const Emoji = styled.span`
  font-size:20px;
`;

const SideHeader = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  min-height:10px;
  /* background-color:blue; */
  padding-left:10px;
  padding-top:10px;
  display:flex;
  align-items:center;
  color:white;
  font-weight:bold;
`;

const Info = styled.div`
  width:100%;
  margin-top:50px;
  min-height:100px;
  /* background-color:blue; */
`;

const ListItem = styled.div`
  display:flex;
  width:100%;
  min-height:${props => props.forList ? '50px' : '24px'} !important;
  /* background-color:yellow; */
  margin-top:10px;
  cursor:pointer;
`;

const ListItemHalf = styled.div`  
  display:flex;
  flex-direction:${props => props.forList ? 'column' : 'row'};
  align-items:${props => props.forList ? 'start' : 'center'};
  flex:0.5;
  height:100%;
  font-weight:${props => props.fontWeight};
  padding-left:${props => props.paddingLeft};
  color:white;
  /* background-color:red; */
  padding-right:2px;
`;

const Icon = styled.div`
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:14px;
  width:15px;
  height:15px;
  background-color:white;
  border-radius:50%;
  color:#FE5722;
  margin-right:10px;
  margin-left:5px;
`;

function Index() {
  const [data, setData] = React.useState('');
  const [prompt, setPrompt] = React.useState({
    question: '',
    answer: ''
  });
  const [isActive, setIsActive] = React.useState('');
  React.useEffect(() => {
    setData(generateCV());
  }, []);

  console.log(data);
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
        } }><Icon><PlaceIcon /></Icon>Местопроживание</ListItemHalf>
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
            <ListItemHalf fontWeight="bold"><Icon><EqualizerIcon /></Icon>Навыки</ListItemHalf>
            <ListItemHalf paddingLeft="10px" fontWeight="normal" forList={ true }>{ data.skills && data.skills.map(item => (
              <p>{ item }</p>
            )) }</ListItemHalf>
          </ListItem>
          <ListItem forList={ true }>
            <ListItemHalf fontWeight="bold"><Icon><GTranslateIcon /></Icon>Языки</ListItemHalf>
            <ListItemHalf paddingLeft="10px" fontWeight="normal" forList={ true }>{ data.languages && data.languages.map(item => (
              <p>{ item }</p>
            )) }</ListItemHalf>
          </ListItem>
        </Info>
      </Side>
    </Root>
  );
}

export default Index;
