import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popper from './Popper';
const ReactMarkdown = require('react-markdown');

const styles = {
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function NewWordsBoard(props) {
  console.log(props);
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <span className='tag is-info is-medium'>New words</span>
      <CardContent>
        {props.data.map((item, i) => (
          <div key={i}>
            {item.rus && (
              <>
                <Typography component='p'>
                  {item.rus} - {item.eng}
                </Typography>
                {item.note && <Popper
                  name='note'
                  content={
                    <ReactMarkdown
                      className='has-text-primary'
                      source={item.note}
                      escapeHtml={false}
                    />
                  }
                /> }
                
              </>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

NewWordsBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewWordsBoard);
