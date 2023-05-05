import React, { useState } from 'react'
import{Form,FormGroup,Input,Label,Button} from "reactstrap";

function Formpart() {

  // const[inputvaluename, setInputvaluename] = useState('');
  // const[inputvaluesurname, setInputvaluesurname] = useState('');
  // const[inputvalueemaial, setInputvalueemail] = useState('');
  const [alluser, setalluser] = useState([])
    let userObj = {
      name: undefined,
      surname: undefined,
      email: undefined
  }
  const [user, setuser] = useState(userObj);

  const handleInputs = (value, type) => {
    setuser((oldData) => ({ ...oldData, [type]: value }))
  }

  const addUser = () => {
    setalluser([...alluser, user])
  }

  return (
    <>
      <>
        <Form>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Name"
              type="text" onChange={(e) => handleInputs(e.target.value.trim(), 'name')}
            />
            <Label for="exampleEmail">
              Name
            </Label>
          </FormGroup>
         {' '}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Surname"
              type="text" onChange={(e) => handleInputs(e.target.value.trim(), 'surname')}
            />
            <Label for="examplePassword">
              Surname
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Surname"
              type="text" onChange={(e) => handleInputs(e.target.value.trim(), 'email')}
            />
            <Label for="examplePassword">
              Email Adress
            </Label>
          </FormGroup>
          <Button onClick={addUser}>
            Submit
          </Button>
        </Form>
      </>
    </>
  )
}

export default Formpart