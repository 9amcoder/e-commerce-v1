import React from "react";
import {
  Grid,
  Card,
  Text,
  Button,
  Input,
  useInput,
  Checkbox,
} from "@nextui-org/react";

function Sortandsearch(props) {
  const { value, reset, bindings } = useInput("");

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}>
        <Checkbox.Group
          //   label="Select cities"
          orientation="horizontal"
          color="secondary"
          //   defaultValue={["buenos-aires"]}
          size="sm"
        >
          <Checkbox value="buenos-aires">A-Z</Checkbox>
          <Checkbox value="sydney">By price</Checkbox>
          <Checkbox value="london">By rating</Checkbox>
        </Checkbox.Group>
      </Grid>
      <Grid xs={6}>
        <Input
          placeholder="Search"
          clearable
          onClearClick={reset}
          fullWidth={true}
        />
      </Grid>
    </Grid.Container>
  );
}

export default Sortandsearch;
