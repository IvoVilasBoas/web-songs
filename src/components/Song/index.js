import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Song = props => {
  const { t, song } = props;
  const classes = useStyles();
  console.log('SonG', song);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={song.imgUrl} title={song.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {song.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {song.year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {t('share')}
        </Button>
        <Button size="small" color="primary">
          {t('learMore')}
        </Button>
      </CardActions>
    </Card>
  );
};

Song.propTypes = {
  t: PropTypes.func,
  song: PropTypes.object,
};

export default withTranslation('common')(Song);
