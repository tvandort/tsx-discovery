import * as React from 'react';

export interface Props {
  firstName: string;
  lastName: string;
  middleInitial?: string;
}

const FunctionalComponent = ({ firstName, lastName }: Props) => (
  <div>
    {firstName} {lastName}
  </div>
);

export default FunctionalComponent;
