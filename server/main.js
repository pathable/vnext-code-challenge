import { Meteor } from 'meteor/meteor';
import { People } from '../collections/people';
import { Communities } from '../collections/communities';
import { COMMUNITIES_DATA, PEOPLE_DATA } from './initial-data';

Meteor.startup(() => {
  if (!Communities.find().count()) {
    COMMUNITIES_DATA.forEach(community => Communities.insert(community));
  }
  const community = Communities.findOne();
  if (!People.find().count()) {
    PEOPLE_DATA.forEach(person =>
      People.insert({ ...person, communityId: community._id })
    );
  }
});
