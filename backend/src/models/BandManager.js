const AbstractManager = require("./AbstractManager");

class BandManager extends AbstractManager {
  constructor() {
    super({ table: "band" });
  }

  insert(band) {
    return this.database.query(
      `insert into ${this.table} (name, genre, country, fav_album, link, album_link, image) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        band.name,
        band.genre,
        band.country,
        band.fav_album,
        band.link,
        band.album_link,
        band.image,
      ]
    );
  }

  update(band) {
    return this.database.query(
      `update ${this.table} set name = ?, genre = ?, country = ?, fav_album = ?, link = ?, album_link = ?, image = ? where id = ?`,
      [
        band.name,
        band.genre,
        band.country,
        band.fav_album,
        band.link,
        band.album_link,
        band.image,
        band.id,
      ]
    );
  }
}

module.exports = BandManager;
