import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const ToDos = new Mongo.Collection("todos");

Meteor.methods({
  "todos.toggleComplete"(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized",
        "You are not allowed to update to-dos for other users."
      );
    }
    ToDos.update(todo._id, {
      $set: { complete: !todo.complete }
    });
  },

  "todos.addToDo"(title) {
    if (!this.userId) {
      throw new Meteor.Error("todos.addToDo.not-authorized", "Please Sign In");
    }
    ToDos.insert({
      title: title,
      complete: false,
      owner: this.userId
    });
  },

  "todos.removeToDo"(id) {
    if (!this.userId) {
      throw new Meteor.Error(
        "todos.removeToDo.not-authorized",
        "To remove this item please sign in"
      );
    }
    ToDos.remove(id);
  },

  "todos.removeCompleted"(user) {
    if (!this.userId) {
      throw new Meteor.Error(
        "todos.removeToDo.not-authorized",
        "To clear these items please sign in"
      );
    }
    ToDos.remove({ owner: this.userId, complete: true });
    // { owner: this.userId, complete: true }
  }
});

if (Meteor.isServer) {
  Meteor.publish("todos", function todosPublication() {
    return ToDos.find({ owner: this.userId });
  });
}
