import * as React from 'react';
import {
  TableCell, TableRow, TableBody, Table,
} from '@mui/material';

// Stateless component that will return the list with the data.

function list(rows) {
  const ListSat = rows.map((showingList, i) => {
    const successStyle = {
      color: showingList.success ? 'green' : 'red',
    };
    const itemKey = `${i}-${showingList.name}`;
    return (
      <TableRow key={itemKey}>
        <TableCell>
          <div>
            {showingList.name}
            <br />
            <span style={successStyle}>
              {showingList.success ? 'Succesfull' : 'Failed'}
            </span>
          </div>
        </TableCell>
        <TableCell>
          {(new Date(showingList.date_local)).toDateString()}
        </TableCell>
      </TableRow>
    );
  });

  return ListSat;
}

function ListSatellite(props) {
  const { showingList, done, success } = props;

  // Prevents the user from seeingn a blank screen until the API returns values

  if (done) {
    return (
      <div>
        {
                    success ? (
                      <div style={{ maxWidth: '90%', margin: '0 auto' }}>
                        <Table>
                          <TableBody>
                            {list(showingList)}
                          </TableBody>
                        </Table>
                      </div>

                    ) : (<p>Unable to recover server data</p>
                    )
                }
      </div>
    );
  }
  return (<p>Loading content...</p>);
}

export default ListSatellite;
