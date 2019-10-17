import { Meteor } from 'meteor/meteor';
import { People } from '../collections/people';
import { Communities } from '../collections/communities';
import { COMMUNITIES_DATA, PEOPLE_DATA } from './initial-data';

Meteor.startup(() => {
  if (Communities.find().count()) {
    return;
  }
  COMMUNITIES_DATA.forEach(community => Communities.insert(community));

  const communities = Communities.find().fetch();

  PEOPLE_DATA.forEach((person, idx) =>
    People.insert({
      ...person,
      communityId: communities[idx % communities.length]._id,
    })
  );
});
