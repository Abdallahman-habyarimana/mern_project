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
import { Button } from '@material-ui/core';
//import TablePagination from '@material-ui/core/TablePagination'
//import TableSortTable from '@material-ui/core/TableSortLabel'

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
class Rooms extends Component{

    state = { 
        chat: []
     }

     componentDidMount(){
        API
        .get(`/get/all/room`)
        .then( res => {
            const chat = res.data;
            this.setState( { chat })
        })
        console.log( this.state.chat )
     }

     onEdit = (row) => {
         if (row) console.log(row)
     }

     createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
      };


    render() { 
        const { classes } = this.props
        // const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

        return ( 
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right" >Type</TableCell>
                        <TableCell align="right">Date Created</TableCell>
                        <TableCell align="right">Date Edit</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right"> Actions </TableCell>
                    </TableRow>
               </TableHead>
               <TableBody>
                    {this.state.chat.map(row => (
                    <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                            {row.room}
                        </TableCell>
                        <TableCell align="right">{new Date(row.date_created).toLocaleDateString("en-US")}</TableCell>
                        <TableCell align="right">{new Date(row.edit_date).toLocaleTimeString("en-US")}</TableCell>
                        <TableCell align="right">{ (row.status) ? 'Activated' : 'Deactivated' }</TableCell>
                        <TableCell align="right"><Button onClick={ () => { this.onEdit(row)}}> Edit</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
  );}
}

Rooms.propTypes = {
    classes: PropTypes.object.isRequired,
    };
 
export default withStyles(styles)(Rooms);