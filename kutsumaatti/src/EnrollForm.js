import React, { Component } from 'react';
import ParsedEnrollments from './ParsedEnrollments';
import './EnrollForm.css';

class EnrollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `
Otterley Wilson (VRL-12757) – Killpop
Otterley Wilson (VRL-12757) – Decoct Cashew MET
Emma P. (VRL-06525) - Hanchik Misha VH15-001-0004
Otterley Wilson (VRL-12757) – Solar Storm LM
Pierre (VRL-10531) - Where When Why VH15-153-0002
Bertta (VRL-13678) - Jokikylän Musti
Frida (VRL-05826) - Ferana F
Heidi N (VRL-01725) - Myriad VH14-031-0752
Pierre (VRL-10531) - Athabasca
Bertta (VRL-13678) - Karhuluodon Hovinarri
Hamzi (VRL-02163) - Tons o' Vodka Vegas VH12-031-0070
Hamzi (VRL-02163) – Shadow’s Phantasie VH15-031-0039
Antsu (VRL-09509) - Full Of Hope VH15-012-0028
Bertta (VRL-13678) - Vienolan Uniikki
Pierre (VRL-10531) - Yereven
Heidi N (VRL-01725) - Everglade Purpleheart VH14-031-0481
Cannabia (VRL-00033) - Moon Hilperi VH12-018-0790
Cannabia (VRL-00033) - Lamourin Leopert VH13-018-0313
Cannabia (VRL-00033) - Moon Kimurantti VH13-018-0807
Hamzi (VRL-02163) - Sweetness vd Shadow VH04-012-7201
`.trim()
    };
  }

  render() {
    return (
      <div className='Kisamaatti-EnrollForm'>
        <textarea
          className='Kisamaatti-EnrollForm__textarea'
          onChange={ this.handleTextareaChange }
          value={ this.state.input }
        />
        <ParsedEnrollments data={ this.state.input } />
      </div>
    );
  }

  handleTextareaChange = (event) => {
    const newValue = event.target.value;
    this.setState({ input: newValue });
  }
}

export default EnrollForm;