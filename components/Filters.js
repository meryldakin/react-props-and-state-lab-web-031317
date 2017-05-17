const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: props.filters.type
    }
    this.handleChange = this.handleChange.bind(this)
    this.petsClick = this.petsClick.bind(this)
  }
  handleChange(e){
    this.setState({
      type: e.target.value
    })
    this.props.onChangeType(e.target.value)
  }
  petsClick(){
    this.props.onFindPetsClick()
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={(e) => this.handleChange(e)} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
        <div className="field">
          <button className="ui secondary button" onClick={() => this.petsClick()}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
