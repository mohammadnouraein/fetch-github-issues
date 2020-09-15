import React, { FunctionComponent, useState } from 'react';
import { Issue } from '../../services/issues/issue';

type IssueProps = {
  issue: Issue
}
export const IssueItem: FunctionComponent<IssueProps> = ({ issue }: IssueProps) => {

  return <div>id: {issue.id}</div>
}

export default IssueItem;