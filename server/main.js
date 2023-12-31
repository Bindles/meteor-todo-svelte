import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.publish("links.all", function publishLinksAll() {
  return LinksCollection.find();
});

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if ((await LinksCollection.find().countAsync()) === 0) {
    await insertLink({
      title: "Do the Tutorial",
      url: "https://svelte-tutorial.meteor.com/",
    });

    await insertLink({
      title: "Follow the Guide",
      url: "https://guide.meteor.com",
    });

    await insertLink({
      title: "Read the Docs",
      url: "https://docs.meteor.com",
    });

    await insertLink({
      title: "Discussions",
      url: "https://forums.meteor.com",
    });
  }
});

Meteor.methods({
  insertPost(title) {
    check(title, String);

    if (!this.userId) {
      throw new Meteor.Error(
        "not-authorized",
        "You must be logged in to create a post."
      );
    }

    return Posts.insert({
      title,
      createdAt: new Date(),
      createdBy: this.userId,
    });
  },
});
