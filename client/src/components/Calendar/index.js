import React, { Component } from "react";
import "./style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";
import "moment/locale/it";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <p>Day: {formatDate(new Date(selectedDay))}</p>}
        {!selectedDay && <p style={{ display: "inline" }}>Due Date:&nbsp;</p>}
        <DayPickerInput
          {...this.props}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date())}`}
        />
      </div>
    );
  }
}
export default Calendar;
