import React, { Component } from 'react';

//formats the input to the correct format
function formatPhoneNumber(s) {

    let simpleString = cleanString(s, false);
    let len = simpleString.length;
    let parts = [simpleString.substring(0, 3), simpleString.substring(3, 6), simpleString.substring(6, 10)];
    let formattedNum;


    if (len > 10)

        return simpleString;


    if (len > 3 && len <= 6)
        formattedNum = "(" + parts[0] + ")" + " " + parts[1];
    else if (len > 6)
        formattedNum = "(" + parts[0] + ")" + " " + parts[1] + "-" + parts[2];
    else if (len == 0)
        formattedNum = "";
    else
        formattedNum = parts[0];


    return formattedNum;



}

function cleanString(s, valueString) {
    if (s != "" && valueString) {
        s = s.replace(' ', '');
        s = s.replace('(', '');
        s = s.replace(')', '');
        s = s.replace('-', '');
        s = "+" + s;
    }

    else {

        s = s.replace(' ', '');
        s = s.replace('(', '');
        s = s.replace(')', '');
        s = s.replace('-', '');
        s = s.replace('+', '');

    }


    return s;
}



class FormattedField extends Component {

    constructor(props) {

        super(props);
        this.state = { formattedValue: '' };
        this.state = { simpleValue: '' };

        this.handleChangeFormatted = this.handleChangeFormatted.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);

    }



    //Handles real time change for the formatted number field
    handleChangeFormatted(e) {
        var x = e.target.value
        this.setState({

            simpleValue: cleanString(x, true),
            formattedValue: formatPhoneNumber(x)

        });
    }

    //Handles real time change for the plain readonly number field
    handleChangeValue(e) {
        this.setState({
            simpleValue: e.target.value
        });
    }



    render(props) {

        return (
            <div>

                #: <input
                    placeholder="Start typing a phone number"
                    type="text"
                    style={{ width: '200px' }}
                    value={this.state.formattedValue}
                    onChange={this.handleChangeFormatted}></input>
                <br />  <br />
                Value: <input readOnly
                    style={{ borderWidth: 0 }}
                    type="text"
                    value={this.state.simpleValue}
                    onChange={this.handleChangeValue}
                ></input>
            </div>
        )
    }

}

export default FormattedField;
