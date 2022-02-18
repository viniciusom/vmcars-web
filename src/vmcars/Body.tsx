import * as React from "react";
import Grid from "@mui/material/Grid";
import CarsTable from "./CarsTable";

const Body = () => (
  <Grid container justifyContent={"center"}>
    <div style={{ marginTop: "20px" }}>
      <Grid item>
        <CarsTable />
      </Grid>
    </div>
  </Grid>
);

export default Body;
