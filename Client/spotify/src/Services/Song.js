import firebase from "firebase";

export default {
  getAll: async () => {
    let songs = await firebase.firestore().collection("songs").get();
    songs = songs.docs.map((doc) => doc.data());
    return songs;
  }
}
