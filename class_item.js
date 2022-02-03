import React, { Component } from "react";

class ClassItem extends Component {
  handleCourseChange(event) {
    this.props.handleChange(this.props.index, {
      Course: Text(event.target.value)
    });
  }


  handleGradeChange(event) {
    this.props.handleChange(this.props.index, {
      grade: Number(event.target.value)
    });
  }

  handleCreditChange(event) {
    this.props.handleChange(this.props.index, {
      credit: Number(event.target.value)
    });
  }

  render() {
    return (

      <tr>
        {/* <td className="mt-1 d-block">1</td> */}
        <td>
          <select
            className="custom-select"
            onChange={this.handleGradeChange.bind(this)}
          >
            <option value="4.00" selected>
              A+
            </option>
            <option value="3.75">A</option>
            <option value="3.50">A-</option>
            <option value="3.25">B+</option>
            <option value="3.00">B</option>
            <option value="2.75">B-</option>
            <option value="2.50">C+</option>
            <option value="2.25">C</option>
            <option value="2.00">D</option>
            <option value="0.00">F</option>
          </select>
        </td>
        <td>
          <select
            className="custom-select"
            onChange={this.handleCreditChange.bind(this)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" selected>
              4
            </option>
            <option value="5">5</option>
          </select>
        </td>
        {/* <td className="mt-1 d-block">
          <i class="far fa-times-circle text-danger" />
        </td> */}
      </tr>
    );
  }
}

export default ClassItem;
