import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '../ReusableButton';
import Quiz from '../Quiz';
import Divider from '@material-ui/core/Divider';
import NewWordsBoard from '../NewWordsBoard';


const ReactMarkdown = require("react-markdown");


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={ value !== index }
      id={ `scrollable-auto-tabpanel-${index}` }
      aria-labelledby={ `scrollable-auto-tab-${index}` }
      { ...other }
    >
      { value === index && <Box p={ 3 }>{ children }</Box> }
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={ classes.root }>
      <AppBar position="static" color="default">
        <Tabs
          value={ value }
          onChange={ handleChange }
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          { props.data.texts && props.data.texts.map((item, index) => (
            <Tab label={ item.title } key={index} { ...a11yProps(index) } />
          )) }
        </Tabs>
      </AppBar>

      { props.data.texts && props.data.texts.map((item, index) => (
        <TabPanel value={ value } key={index} index={ index }>
          <Button audio={ item.audio } />
          <ReactMarkdown className="text-quizzer-text has-text-primary is-size-4" source={ item.text } escapeHtml={ false } />
          <Divider />
          <Divider />
          <Divider />
          <div className="marginBottom"/>
          {item.newWords && (<NewWordsBoard data={item.newWords}/>)}
          <div className="marginBottom"/>
          <Quiz data={ item } />
        </TabPanel>
      )) }

    </div>
  );
}