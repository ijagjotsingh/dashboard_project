import "./list.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
{ key:1 ,subject: "Mathematics" , startDate: "01/09/2022", endDate:"07/09/2022"  , status:"Pending"},
{ key:2 ,subject: "Physics" , startDate: "01/09/2022", endDate:"07/09/2022"  , status:"Submitted"},
{ key:3 ,subject: "Chemistry" , startDate: "01/09/2022", endDate:"07/09/2022"  , status:"Pending"},
{ key:4 ,subject: "English" , startDate: "01/09/2022", endDate:"07/09/2022"  , status:"Pending"},
{ key:5 ,subject: "Optional Subject" , startDate: "01/09/2022", endDate:"07/09/2022"  , status:"Pending"}
];

function List(){
    return <div className="list">
              <div className="title">Assignments</div>
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight:"600" }}>Subject</TableCell>
                    <TableCell style={{ fontWeight:"600" }} align="center">Start Date</TableCell>
                    <TableCell style={{ fontWeight:"600" }} align="center">End Date</TableCell>
                    <TableCell style={{ fontWeight:"600" }} align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.subject}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className=" design">{row.subject}</div>
                      </TableCell>
                      <TableCell align="center"><div className="design">{row.startDate}</div></TableCell>
                      <TableCell align="center"><div className="design">{row.endDate}</div></TableCell>
                      <TableCell align="center"><div className={`design basic ${row.status}`}>{row.status}</div></TableCell>
                    </TableRow> 
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    </div>
}

export default List;