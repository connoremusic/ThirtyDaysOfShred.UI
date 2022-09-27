import { Tab } from './tab';

export interface Member {
  id:               number;
  username:         string;
  age:              number;
  knownAs:          string;
  profileImageUrl:  string;
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
