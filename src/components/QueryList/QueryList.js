import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

export class QueryList extends React.Component {
 
  render() {
    return (
      <div>
        <Link to='/queries/new' align='left'><Button >New Query</Button></Link>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width='2'>Name</Table.HeaderCell>
              <Table.HeaderCell>Query</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.queries.map(({ id, firstName, surname, query }) => (
              <Table.Row key={id}>
                <Table.Cell>{firstName} {surname}</Table.Cell>
                <Table.Cell>{query}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  queries: state.queries
});


export default connect(
  mapStateToProps
)(QueryList);
