import { composeWithTracker, registerComponent } from  "@reaction/components";
import { Meteor } from "meteor/meteor";
import { Packages } from "/lib/collections";
import { Reaction } from "/client/api";
import EditGroup from "../components/editGroup";

const composer = (props, onData) => {
  const pkg = Meteor.subscribe("Packages", Reaction.getShopId());
  if (pkg.ready()) {
    const packages = Packages.find().fetch();
    onData(null, { packages, ...props });
  }
};

registerComponent("EditGroup", EditGroup, composeWithTracker(composer));

export default composeWithTracker(composer)(EditGroup);
