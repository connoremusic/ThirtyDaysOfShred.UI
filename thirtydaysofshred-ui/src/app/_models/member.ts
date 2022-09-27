import { Tab } from './tab';

export interface Member {
  id:               number;
  username:         string;
  age:              number;
  knownAs:          string;
  created:          Date;
  lastActive:       Date;
  gender:           string;
  profileImageUrl:  string;
  authoredTabs:     Tab[];
  favoriteTabs:     Tab[];
  likedTabs:        Tab[];
  practiceRoutines: Tab[];
}
