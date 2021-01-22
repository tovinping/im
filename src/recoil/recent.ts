import { RecoilRoot, atom, useRecoilState } from 'recoil'

export const notesState = atom({
  key: 'notesState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial state)
});