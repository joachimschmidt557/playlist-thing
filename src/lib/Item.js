export default class Item {
  constructor({
    id = -1,
    artist = '',
    title = '',
    album = '',
    released = '',
    seconds = 0,

    pause = false,
    notes = '',

    file = '',
    spotifyTrackId = '',
    youtubeId = ''
  } = {}) {
    this.id = id;
    this.artist = artist;
    this.title = title;
    this.album = album;
    this.released = released;
    this.seconds = seconds;

    this.pause = pause;
    this.notes = notes;

    this.file = file;
    this.spotifyTrackId = spotifyTrackId;
    this.youtubeId = youtubeId;
  }
}
