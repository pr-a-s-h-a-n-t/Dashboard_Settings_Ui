import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";

function CustomDropDown({ dropDownList, value, onChange, disabled }) {
  const dispatch = useDispatch();
  const StepperValue = useSelector((state) => state.StepperValue);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Select
          fullWidth
          displayEmpty
          disabled={StepperValue === 2 ? true : false}
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
