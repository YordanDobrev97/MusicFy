import firebase from "firebase";

export default {
  getAll: async () => {
    let songs = await firebase.firestore().collection("songs").get();
    songs = songs.docs.map((doc) => {
      return {id: doc.id, ...doc.data()}
    });
    return songs;
  },

  addFavorite: async (uid, id) => {
    const collection = await firebase
    .firestore()
    .collection("favorites")
    .orderBy('userId')
    .startAt(uid)
    .get();

    const userDoc = collection.docs.map((doc) => {
      return {id: doc.id, ...doc.data()}
    })[0]

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
