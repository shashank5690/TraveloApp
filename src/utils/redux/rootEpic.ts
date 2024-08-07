import { combineEpics,Epic } from "redux-observable";
import { homeEpic } from "../../Screens/ScreenHome/redux/HomeEpic";

// export const rootEpic = combineEpics(
//     homeEpic,
// );
//  export default rootEpic;

const epic: Epic[] = [
    homeEpic,
    
] as Epic[];

export const rootEpic = combineEpics(...epic);