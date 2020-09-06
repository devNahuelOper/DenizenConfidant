import React from 'react';


class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    e.stopPropagation();
    this.setState({ "drop": true });
  }

  leave(e) {
    e.stopPropagation();
    this.setState({ "drop": false });
  }


  render() {
    const languages = ['English', 'Spanish', 'Chinese', 'Japanese',
    'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Dutch', 'Dothraki'];
  
    return (
      <div>Preferred language /
        <br />
        <button onClick={() => { this.setState({ drop: !this.state.drop }) }} onBlur={this.leave} className="language-dropdown" id="preferred-language">
          {this.props.language || 'English'}
          <ul className={this.state.drop ? "language-reveal" : "language-hide"}>
            {/* <li>Select a country:</li> */}
            {languages.map(language => (
              <li key={language}
                onClick={() => {

                  this.props.onChange(language);
                }}
              >
                {language}
              </li>
            ))}

          </ul>
        </button>
      </div>
    )
  }
}

export default LanguageDropdown;