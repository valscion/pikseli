import React, { Component } from 'react';
import EnrollmentList from './EnrollmentList';
import './EnrollForm.css';

const EXAMPLE_INPUT = `
Ireth (VRL-03777) - Viisikon Prudence
Nella (VRL-13817) - Kalondra
Helo (VRL-13822) - Serellenders Difference
Otterley Wilson (VRL-12757) - Serellenders Lavender Jade
miivi (VRL-13320) - Bonheur
miivi (VRL-13320) - Delicate Pinocchio VH16-031-0509
HM (VRL-00096) - Pantherinae
Liia (VRL-11284) - Marvellous Ceder VH16-031-0428
Creimeide (VRL-06904) - #SorryNotSorry 5318
Nella (VRL-13817) - Napoleon
felissa (VRL-04000) - Delicate Barricade VH16-031-0420
Liia (VRL-11284) - Vuornan Chinachick VH16-031-0431
Nella (VRL-13817) - Stiletto
felissa (VRL-04000) - Versace Wolf VH16-011-0127
Ireth (VRL-03777) - Viisikon Amaranth VH16-031-0564
Mila (VRL-11936) - Scotspine Joestarr VH16-031-0060
Liia (VRL-11284) - Vuornan Razzmataxx VH16-031-0430
HM (VRL-00096) - Adiette
Hazel (VRL-14333) - Callahan
HM (VRL-00096) - Marvellous Umberto
Helo (VRL-13822) - Rise Like a Phoenix 5318
Ireth (VRL-03777) - Viisikon Blake VH16-031-0533
Hazel (VRL-14333) - Wolf's Pioneer
Otterley Wilson (VRL-12757) - Serellenders Blurryface
Mila (VRL-11936) - Scotspine X-Boxer VH16-031-0057
Bris (VRL-14307) - Doowutchyalike Koket
Helo (VRL-13822) - Serellenders Cold & Grey
miivi (VRL-13320) - Alex
Mila (VRL-11936) - Scotspine Gilda VH16-031-0325
Otterley Wilson (VRL-12757) - Serellenders Hiccup
`.trim();

class EnrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    const lines = this.state.input.split("\n");

    return (
      <div className='Kisamaatti-EnrollForm'>
        <textarea
          className='Kisamaatti-EnrollForm__textarea'
          onChange={ this.handleTextareaChange }
          value={ this.state.input }
        />
        <EnrollmentList
          lines={ lines }
          onLineChange={ this.handleLineChange }
        />
      </div>
    );
  }

  handleTextareaChange = (event) => {
    const newValue = event.target.value;
    this.setState({ input: newValue });
  }

  handleLineChange = (line, newContent) => {
    const lines = this.state.input.split("\n");

    const newInput = [
      ...lines.slice(0, line),
      newContent,
      ...lines.slice(line + 1)
    ].join("\n")

    this.setState({ input: newInput })
  }
}

export default EnrollForm;
