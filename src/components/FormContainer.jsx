import { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Label, FormGroup } from 'reactstrap';

function FormContainer(props) {
  const { addMember } = props;
  const [formData, setFormData] = useState({});

  const initialForm = {
    name: '',
    email: '',
    dept: '',
    title: '',
    duties: '',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler formData', formData);

    axios
      .post('https://reqres.in/api/users', formData)
      .then(function (response) {
        console.log('reqres', response);
        addMember(response.data);
        setFormData(initialForm);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormState = { ...formData, [name]: value };
    setFormData(newFormState);
    console.log('changeHandler', name, type, checked, newFormState);
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="name">Ad Soyad:</Label>
        <Input
          id="name"
          name="name"
          placeholder="Çalışanın tam adı ve soyadı"
          type="text"
          value={formData.name}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Kurumsal email adresi"
          type="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="dept">Departman</Label>
        <Input
          id="dept"
          name="dept"
          placeholder="Çalıştığı departman"
          type="text"
          value={formData.dept}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="title">Ünvan</Label>
        <Input
          id="title"
          name="title"
          placeholder="Çalışanın ünvanı"
          type="text"
          value={formData.title}
          onChange={changeHandler}
        />
      </FormGroup>

      <FormGroup>
        <Label for="duties">Takım içi görevleri</Label>
        <Input
          id="duties"
          name="duties"
          placeholder="Çalışanın takım içindeki görev listesi"
          type="textarea"
          value={formData.duties}
          onChange={changeHandler}
        />
      </FormGroup>

      <Button type="submit">Kaydet</Button>
    </Form>
  );
}

export default FormContainer;
