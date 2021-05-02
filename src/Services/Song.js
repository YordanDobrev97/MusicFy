import firebase from "firebase";

const getCollectionUser = async (uid) => {
    const collection = await firebase
    .firestore()
    .collection('favorites')
    .orderBy('userId')
    .startAt(uid)
    .get();

    const userDoc = collection.docs.map((doc) => {
      return {id: doc.id, ...doc.data()}
    })[0]

    return userDoc;
}

const extractSongs = async (userCollection) => {
  const songs = []

  for (const id of userCollection) {
    const song = await firebase
      .firestore()
      .collection('songs')
      .doc(id)
      .get()
      .then((doc) => {
        return doc.data()
      });
      songs.push(song)
  }

  return songs;
}

export default {
  getAll: async () => {
    let songs = await firebase.firestore().collection("songs").get();
    songs = songs.docs.map((doc) => {
      return {id: doc.id, ...doc.data()}
    });
    return songs;
  },

  getFavoritesUser: async (uid) => {
    const userCollection = await getCollectionUser(uid)
    const songs = await extractSongs(userCollection.songs);
    return songs;
  },

  addFavorite: async (uid, id) => {
    const userDoc = await getCollectionUser(uid)
    userDoc.songs.push(id)

    await firebase
    .firestore()
    .collection("favorites")
    .doc(userDoc.id)
    .set({
      userId: userDoc.userId,
      songs: userDoc.songs
    })
  }
}
