import React, { Component } from "react";
import songService from "../Services/list-song";
import Songs from '../Async/LoadSong';

class ListSong extends Component {
  async getSongs() {
    const songs = await songService.getMostLikes()
    return songs;
  }

  render() {
    return (
      <div>
        {/* <Songs songs={this.getSongs}/> */}
      </div>
    );
  }
}

export default ListSong;
