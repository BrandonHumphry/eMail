import React from "react";
import "./EmailRow.css";
import { IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlinedIcon";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function EmailRow({ title, subject, description, time, id }) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <CheckBoxIcon />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow__message"></div>
      <div className="emailRow__description"></div>
    </div>
  );
}

export default EmailRow;
