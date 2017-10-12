import * as React from 'react';

interface Props {
  firstName: string;
  lastName: string;
  middleInitial?: string;
}

const FunctionalComponent = ({ firstName, middleInitial, lastName }: Props) => (
  <div>
    Hello, {firstName} {middleInitial} {lastName}.
  </div>
);

export default FunctionalComponent;
