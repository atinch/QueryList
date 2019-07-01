import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const QueryList = (props) => {
const { queries } = props;

  return (
        <div>
        <Link to='/queries/new' align='left'><Button >New Query</Button></Link>
        <Table fixed>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell width='4'>Name</Table.HeaderCell>
            <Table.HeaderCell>Query</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        {queries.map((query) => (
        <Table.Row>
            <Table.Cell>{query.name} {query.surname}</Table.Cell>
            <Table.Cell>{query.query}</Table.Cell>
        </Table.Row>
        ))}
        </Table.Body>
        </Table>
        </div>
  );

};

const mapStateToProps = (state) => ({
  queries: state.queries
});

export default connect(
  mapStateToProps
)(QueryList);
