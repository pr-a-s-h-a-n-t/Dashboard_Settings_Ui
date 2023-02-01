import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

 

function CustomDropDown({ dropDownList, value, onChange, disabled }) {
  // const theme = useTheme();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Select
          fullWidth
          displayEmpty
          // label="Select"
          // sx={{
          //   width: "274px",
          //   height: "40px",
          //   border: "1px solid black",
          // }}
          // disabled={disabled}
          // required={required}
          id="simple-select"
          inputProps={{
            "aria-label": "Without label",
          }}
          value={value}
          onChange={handleChange}
        >
          {dropDownList.map((item, id) => (
            <MenuItem key={id} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomDropDown;
