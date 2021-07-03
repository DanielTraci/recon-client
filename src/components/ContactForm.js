import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ContactForm(props) {
    const classes = useStyles();
    const { onSend } = props
    return (
        <div>
            <form onSubmit={onSend} className={classes.root} noValidate>
                <TextField required color="primary" id="standard-basic" name="name" label="Your name" variant="outlined" />
                <TextField required id="standard-basic" name="email" label="Your email" type="email" variant="outlined" />
                <TextField required id="outlined-multiline-static" name="message"
                    label="Your message"
                    multiline
                    rows={4}
                    variant="outlined"
                    color="secondary"
                />
                <Button variant="outlined" color="primary" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default withRouter(ContactForm)

/* 
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bugReport: false,
    businessInquiry: false,
    generalSubject: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { bugReport, businessInquiry, generalSubject } = state;
  const error = [bugReport, businessInquiry, generalSubject].filter((v) => v).length !== 1;

  return (
    <div className={classes.root}>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">The reason</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={bugReport} onChange={handleChange} name="bugReport" />}
            label="Report a bugReport"
          />
          <FormControlLabel
            control={<Checkbox checked={businessInquiry} onChange={handleChange} name="businessInquiry" />}
            label="businessInquiry Inquiry"
          />
          <FormControlLabel
            control={<Checkbox checked={generalSubject} onChange={handleChange} name="generalSubject" />}
            label="generalSubject"
          />
        </FormGroup>
        <FormHelperText>Please choose one</FormHelperText>
      </FormControl>
    </div>
  );
}
 */