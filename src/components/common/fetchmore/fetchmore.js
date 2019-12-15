import React from "react";
import './fetchmore.scss';
import { Button } from "@material-ui/core";

function FetchMore ({ hasNextPage, variables, updateQuery, fetchMore }) {
  if (hasNextPage) {
    return (
      <p className="fetchmore">
        <Button variant="contained" color="primary" onClick={() => fetchMore({ variables, updateQuery })}>
          Fetch More
        </Button>
      </p>
    );
  }
  return <></>;
}

export default FetchMore;