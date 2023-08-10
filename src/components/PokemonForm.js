import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontImage, setFrontImage] = useState('')
  const [backImage, setBackImage] = useState('')

  const handleName = (e) => {setName(e.target.value)}
  const handleHp = (e) => {setHp(e.target.value)}
  const handleFrontImage = (e) => {setFrontImage(e.target.value)}
  const handleBackImage = (e) => {setBackImage(e.target.value)}

  function handleFormSubmit(e) {
    e.preventDefault()
    const OPTIONS = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, hp: Number(hp), sprites: {front: frontImage, back: backImage} })
    }
    fetch('http://localhost:3001/pokemon', OPTIONS)
    .then(res => res.json())
    .then(data => addNewPokemon(data))

    setName('')
    setHp('')
    setFrontImage('')
    setBackImage('')
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleName} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImage}
            onChange={handleFrontImage}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImage}
            onChange={handleBackImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
