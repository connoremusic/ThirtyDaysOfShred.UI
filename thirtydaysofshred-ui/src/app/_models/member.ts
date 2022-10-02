import { Tab } from './tab';
import { ProfilePhoto } from './profile-photo';

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
  goals:            string[];
  created:          Date;
  lastActive:       Date;
  authoredTabs:     Tab[];
  favoriteTabs:     Tab[];
  likedTabs:        Tab[];
  practiceRoutines: Tab[];
}
