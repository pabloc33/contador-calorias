import { Dispatch, ReactNode, createContext, useReducer } from "react";
import {
  ActivityActions,
  ActivityState,
  activityReducer,
  initialState,
} from "../reducers/activity-reducer";

interface ActivityProviderProps {
  children: ReactNode;
}

interface ActivityContextProps {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
}

export const ActivityContext = createContext<ActivityContextProps>(
  {} as ActivityContextProps
);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <ActivityContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
