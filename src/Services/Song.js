import firebase from "firebase";

const getCollectionUser = async (uid) => {
  let favorites = await firebase.firestore().collection("favorites").get();

  let userDoc = [];
  favorites.docs.forEach((f) => {
    const obj = f.data();
    console.log(obj.userId === uid);
    if (obj.userId === uid) {
      userDoc.push({ id: f.id, ...obj });
    }
  });

  return userDoc[0];
};

const getAll = async () => {
  let songs = await firebase.firestore().collection("songs").get();
  songs = songs.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return songs;
};

const extractSongs = async (userCollection) => {
  const songs = [];
  console.log(userCollection);
  for (const id of userCollection) {
    const song = await firebase
      .firestore()
      .collection("songs")
      .doc(id)
      .get()
      .then((doc) => {
        return doc.data();
      });
    songs.push(song);
  }

  return songs;
};

export default {
  getAll,
  getFavoritesUser: async (uid) => {
    const userCollection = await getCollectionUser(uid);
    return userCollection ? await extractSongs(userCollection.songs) : [];
  },

  addFavorite: async (uid, id) => {
    const userDoc = await getCollectionUser(uid);
    userDoc.songs.push(id);

    await firebase.firestore().collection("favorites").doc(userDoc.id).set({
      userId: userDoc.userId,
      songs: userDoc.songs,
    });
  },
};
