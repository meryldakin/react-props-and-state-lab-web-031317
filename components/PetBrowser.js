const React = require('react');

const Pet = require('./Pet');




class PetBrowser extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet =>
          < Pet pet={this.props.pet} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet}/>
        )}
      </div>
    );
  }
}

module.exports = PetBrowser;
