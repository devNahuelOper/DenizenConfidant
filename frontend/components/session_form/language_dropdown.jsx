import React from "react";

class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false,
    };
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    e.stopPropagation();
    this.setState({ drop: true });
  }

  leave(e) {
    e.stopPropagation();
    this.setState({ drop: false });
  }

  render() {
    const languages = [
      "English",
      "Spanish",
      "Chinese",
      "Japanese",
      "French",
      "German",
      "Italian",
      "Portuguese",
      "Russian",
      "Dutch",
      "Dothraki",
    ];

    return (
      <div>
        Preferred language /
        <br />
        <button
          onClick={() => {
            this.setState({ drop: !this.state.drop });
          }}
          onBlur={this.leave}
          className="language-dropdown"
          id="preferred-language"
          type="button"
        >
          <span className="dropdown-label language-label">
            {this.props.language || <small>Select a language:</small>}
          </span>
          <ul className={this.state.drop ? "language-reveal" : "language-hide"}>
            <li>Select a language:</li>
            {languages.map((language) => (
              <li
                key={language}
                onClick={() => {
                  this.props.onChange(language);
                }}
                className={this.props.language === language ? "selected" : ""}
              >
                {language}
              </li>
            ))}
          </ul>
        </button>
      </div>
    );
  }
}

export default LanguageDropdown;
