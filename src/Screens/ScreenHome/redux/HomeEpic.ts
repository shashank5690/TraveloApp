import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs";
import { of, Observable, from } from "rxjs";
import { fetchDestinationsStart, fetchDestinationsFailure, fetchDestinationsSuccess, HomeActions } from "./HomeSlice";
import { fetchDestinationsFromApi } from "../utils/Services/fetchapiDestination";
import { Destination } from "../utils/Interface";


export const homeEpic = (action$: Observable<HomeActions>) =>
    action$.pipe(
      ofType(fetchDestinationsStart.type),
      mergeMap(() =>
        from(fetchDestinationsFromApi()).pipe( 
          mergeMap((data: Destination[]) => 
            of(fetchDestinationsSuccess(data)) 
          ),
          catchError((error: Error) =>
            of(fetchDestinationsFailure(error.message)) 
          )
        )
      )
    );