import React from 'react';
import Helmet from 'react-helmet';
import Button from '../../Components/Button';
import Form from '../../Components/Form';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import styled from '../../typed-components';

const Container = styled.div`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 40px;
`;

interface IProps {
  address: string;
  name: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddPlacesPresenter: React.SFC<IProps> = ({ address, name, onInputChange }) => (
  <React.Fragment>
    <Helmet>
      <title>Add Place | Nuber</title>
    </Helmet>
    <Header title={'Add Place'} backTo={'/'} />
    <Container>
      <Form submitFn={null}>
        <ExtendedInput
          placeholder={'Name'}
          type={'text'}
          value={name}
          onChange={onInputChange}
        />
        <ExtendedInput
          placeholder={'Address'}
          type={'text'}
          value={address}
          onChange={onInputChange}
        />
        <Button onClick={null} value={'Add Place'} />
      </Form>
    </Container>
  </React.Fragment>
)

export default AddPlacesPresenter;
