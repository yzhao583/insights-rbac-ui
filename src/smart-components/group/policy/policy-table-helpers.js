import React from 'react';
import ExpandableContent from './expandable-content';
import { timeAgo } from '../../../helpers/shared/helpers';

export const createRows = (data, filterValue = undefined) => (
  data.filter(item => { const filter = filterValue ? item.name.includes(filterValue) : true;
    return filter; }).reduce((acc,  { uuid, name, description, roles, modified }, key) => ([
    ...acc, {
      uuid,
      isOpen: false,
      cells: [ name, description, roles.length, `${timeAgo(modified)}` ]
    }, {
      parent: key * 2,
      fullWidth: true,
      cells: [{ title: <ExpandableContent description={ description } roles={ roles }/> }]
    }
  ]), []));
