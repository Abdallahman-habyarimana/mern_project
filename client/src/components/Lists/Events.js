import React, { Component } from 'react';
import API from './api'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '70%',
      marginTop: theme.spacing.unit * 5,
      overflowX: 'auto',
      //marginRight: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 16,

    },
    table: {
      minWidth: 700,
    },
  });
  
class Events extends Component {
    state = { 
        chat: []
     }

     componentDidMount(){
        API
        .get(`eventlog`)
        .then( res => {
            const chat = res.data;
            this.setState( { chat })
        })
        console.log( this.state.chat )
     }

    render() { 
        const { classes } = this.props
        return ( 
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right"> Time</TableCell>
                        <TableCell align="right">PPID</TableCell>
                    </TableRow>
               </TableHead>
               <TableBody>
                    {this.state.chat.map(row => (
                    <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                            {row.type}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.ppid}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
  );}
}

Events.propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
 

export default withStyles(styles)(Events);