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

//   /* SORTING THE TABLE */
//   function desc(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1;
//     }
//     return 0;
//   }
  
//   function stableSort(array, cmp){
//       const stabilizedThis = array.map((el,index) => [el,index]);
//       stabilizedThis.sort((a,b)=>{
//           const order = cmp(a[0],b[0]);
//           if(order !==0) return order;
//           return a[1] - b[1];
//       })
//       return stabilizedThis.map(el => el[0]);
//   }

//   function getSorting(order, orderBy) {
//     return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
//   }


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
                        <TableCell align="right">{new Date(row.date).toLocaleDateString("en-US")}</TableCell>
                        <TableCell align="right">{new Date(row.time).toLocaleTimeString("en-US")}</TableCell>
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