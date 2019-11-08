import { Action, action, Thunk, thunk } from "easy-peasy";
import todosModel from "./todos";

export interface NotificationModel {
  msg: string;
  set: Action<NotificationModel, string>;
  onTodoAdded: Thunk<NotificationModel, string>;
}

const notification: NotificationModel = {
  msg: "",
  set: action((state, payload) => {
    state.msg = payload;
  }),
  onTodoAdded: thunk(
    (actions, payload) => {
      actions.set(`Added "${payload}" to todos`);
    },
    {
      listenTo: todosModel.add
    }
  )
};

export default notification;
