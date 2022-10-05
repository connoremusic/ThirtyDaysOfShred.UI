import { Tab } from './tab';
import { ProfilePhoto } from './profile-photo';
import { Goal } from './goal';

export interface Member {
  id:               number;
  username:         string;
  age:              number;
  knownAs:          string;
  profilePhoto:     ProfilePhoto;
  gender:           string;
  country:          string;
  about:            string;
  influences:       string;
  goals:            Goal[];
  created:          Date;
  lastActive:       Date;
  authoredTabs:     Tab[];
  favoriteTabs:     Tab[];
  likedTabs:        Tab[];
  practiceRoutines: Tab[];
}
