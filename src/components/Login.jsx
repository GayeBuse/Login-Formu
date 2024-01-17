import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then(function (response) {
        // handle success
        console.log(response);
        const theCredentials = response.data;
        for (let info of theCredentials) {
          if (
            info.email === formData.email &&
            info.password === formData.password
          ) {
            console.log('info doğru');
            // main'e yönlendir
            history.push('/main');
            return;
          }
          history.push('/error');
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  // her değişimde state'deki form datasını güncelle => handleChange.
  /* 
 ReadMe'deki görev listesini burada yapabilirsin.
 */
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
      </FormGroup>
      <Button type="submit" color="primary">Sign In</Button>
    </Form>
  );
}
