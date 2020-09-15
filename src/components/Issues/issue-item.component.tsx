import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

import InfoIcon from '@material-ui/icons/Info';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import { Issue } from '../../services/issues/issue';


const useStyles = makeStyles((theme) => ({
  greenIcon: {
    color: '#fff',
    backgroundColor: green[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}));

type IssueProps = {
  issue: Issue
}

export const IssueItem: FunctionComponent<IssueProps> = ({ issue }: IssueProps) => {
  const classes = useStyles();
  const dateDesc = moment(issue.created_at).fromNow();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.greenIcon}>
          <InfoIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText role='issue-description'
        primary={<React.Fragment>
           <Button href={issue.url} >
           {issue.title}</Button>
          {issue.labels.map(label => <Chip
            key={label.id}
            size='small'
            style={{
              backgroundColor: `#${label.color}`
            }}
            label={label.name}
          />)}
        </React.Fragment>}
        secondary={`#${issue.number} opened ${dateDesc} by ${issue.user?.login}`}
      />
      {!!issue.comments &&
        <ListItemSecondaryAction>
          <Button href={issue.comments_url}>
            <Badge badgeContent={issue.comments} color="primary" >
              <ChatBubbleOutlineIcon />
            </Badge>
          </Button>
        </ListItemSecondaryAction>
      }
    </ListItem>
  );
}

export default IssueItem;