import React from 'react';
import { useDatabase, withObservables } from '@nozbe/watermelondb/react';
import { Q } from '@nozbe/watermelondb';
import InceptionDraftList from '../../components/InceptionDraftList';


const LiveInceptionDraftList = ({ search }) => {

  const database=useDatabase();

  const EnhancedList = React.useMemo(() => {
    return withObservables(['search'], ({ search }) => {
      const collection = database.get('inception_draft');
      const query = search
        ? collection.query(Q.where('address', Q.like(`%${Q.sanitizeLikeString(search)}%`)))
        : collection.query();

      return {
        drafts: query.observe(),
      };
    })(InceptionDraftList);
  }, [search]);

  return <EnhancedList search={search} />;
};

export default LiveInceptionDraftList;
