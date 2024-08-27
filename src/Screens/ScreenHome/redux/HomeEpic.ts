import { ofType } from "redux-observable";
import { catchError, mergeMap, map } from "rxjs/operators";
import { of, from, Observable } from "rxjs";
import { fetchDestinationsStart, fetchDestinationsFailure, fetchDestinationsSuccess, HomeActions } from "./HomeSlice";
import { fetchDestinationsFromApi } from "../utils/Services/fetchapiDestination";
import { makegetrequest } from "../utils/Services/interceptor";
import { Destination } from "../utils/Interface";

export const homeEpic = (action$: Observable<HomeActions>) =>
    action$.pipe(
        ofType(fetchDestinationsStart.type),
        mergeMap(() =>
            from(makegetrequest(fetchDestinationsFromApi())).pipe(
                map((response) => {
                    if (response.data) {
                        return fetchDestinationsSuccess(response.data as Destination[]);
                    } else {
                        return fetchDestinationsFailure('No destinations found');
                    }
                }),
                catchError((error) => of(fetchDestinationsFailure(error.message || 'Error fetching destinations')))
            )
        )
    );


    
  // my version that fetching the data from the api
// import { ofType } from "redux-observable";
// import { catchError, mergeMap } from "rxjs";
// import { of, Observable, from } from "rxjs";
// import { fetchDestinationsStart, fetchDestinationsFailure, fetchDestinationsSuccess, HomeActions } from "./HomeSlice";
// import { fetchDestinationsFromApi } from "../utils/Services/fetchapiDestination";
// import { Destination } from "../utils/Interface";
// import { makegetrequest } from "../utils/Services/interceptor";


// export const homeEpic = (action$: Observable<HomeActions>) =>
//     action$.pipe(
//       ofType(fetchDestinationsStart.type),
//       mergeMap(async () =>
//         from(makegetrequest(await fetchDestinationsFromApi()))
//            .then((response: { data: Destination[]; }) => response.data ? fetchDestinationsSuccess(response.data) : fetchDestinationsFailure('No destinations found'))
//            .catch((error: string) => of(fetchDestinationsFailure(error
//         )
//       )
//     )));


