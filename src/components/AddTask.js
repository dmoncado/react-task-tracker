import React from "react";
import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  const [dat, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day and Time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;