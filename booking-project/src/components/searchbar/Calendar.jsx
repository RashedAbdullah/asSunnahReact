import React from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      ;
    </div>
  );
};

export default Calendar;
