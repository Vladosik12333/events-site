import './CreateEvent.scss';
import React from 'react';
import ExtraModal from '../../shared/ExtraModal';

export default function CreateEvent() {
  const onSubmit = info => {
    console.log(info);
  };

  return <ExtraModal onSubmit={onSubmit} actionEvent />;
}
