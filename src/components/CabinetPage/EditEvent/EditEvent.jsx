import './EditEvent.scss';
import React from 'react';
import ExtraModal from '../../shared/ExtraModal';

export default function CreateEvent() {
  const onSubmit = info => {
    console.log(info);
  };

  return (
    <ExtraModal
      onSubmit={onSubmit}
      actionEvent={false}
      infoForEvent={{
        title: 'asdasdasd',
        about: 'asdkjashkdbnasd',
        photo: 'sadsakfjasdds',
        author: 'as,dfljskfgjdfaksnm',
        place: 'sa;dlsfkjdhkgfksjnlma,',
        date: '2022-02-22T20:00',
      }}
    />
  );
}
