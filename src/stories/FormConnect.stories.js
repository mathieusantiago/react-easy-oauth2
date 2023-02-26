import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { FormConnect } from '../components/FormConnect';

const stories = storiesOf('supaBase-oAuth2', module);

stories.add('FormConnect', () => {
  return (
    <div>
      <FormConnect/>
    </div>
  );
});
