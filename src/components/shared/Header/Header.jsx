import React from 'react';
import propTypes from 'prop-types';
import Template from '../../Template';
import FormHeader from './FormHeader';
import ContainerHeader from './ContainerHeader';
import './Header.scss';

export default function Header({ form }) {
  return (
    <header className={form ? 'header' : 'header headerCabinet'}>
      <Template>
        <ContainerHeader />
        {form && <FormHeader />}
      </Template>
    </header>
  );
}

Header.propTypes = {
  form: propTypes.bool.isRequired,
};
