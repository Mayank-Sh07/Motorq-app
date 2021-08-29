import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { RRule } from "rrule";

const localizer = momentLocalizer(moment);

export default function MyCalendar({ data }) {
  let classes = [];
  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };

  if (!!data) {
    classes = [];
    data.forEach((clss) => {
      let frame = new RRule({
        freq: RRule.WEEKLY,
        dtstart: new Date(clss.class_timing),
        count: 120,
        interval: 1,
      });
      let dates = frame.all().map((date) => ({
        title: clss.course_id,
        start: date,
        end: new Date(date).addHours(1),
      }));
      classes.push(...dates);
    });
  }

  return (
    <div className="max-w-2xl m-auto h-96 mt-8">
      <BigCalendar
        localizer={localizer}
        events={classes}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
