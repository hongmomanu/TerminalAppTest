// inspired by: https://github.com/coomsie/topomap.co.nz/blob/master/Resources/leaflet/TileLayer.DB.js
L.TileLayer.MBTiles = L.TileLayer.extend({
	//db: SQLitePlugin
	mbTilesDB: null,

	initialize: function(url, options, db) {
		this.mbTilesDB = db;

		L.Util.setOptions(this, options);
	},
	getTileUrl: function (tilePoint, zoom, tile) {
		//_getOffsetZoom() is deprecated
		var z = this._getZoomForUrl(zoom);

		//TileMillScheme (tms) doesn't really work
		//As an alternative this functionality 
		//is copied from the latest leaflet release
		var limit = this._getWrapTileNum();

		var x = tilePoint.x;
		var y = limit - tilePoint.y - 1;

		var base64Prefix = 'data:image/gif;base64,';

		this.mbTilesDB._executeSql("SELECT tile_data FROM images INNER JOIN map ON images.tile_id = map.tile_id WHERE zoom_level = ? AND tile_column = ? AND tile_row = ?;", 
			[z, x, y],
			function (res) {
				tile.src = base64Prefix + res.rows[0].tile_data;
			},
			function (er) {
				console.log('error with executeSql', er);
			}
		);

	},
	_loadTile: function (tile, tilePoint, zoom) {
		tile._layer = this;
		tile.onload = this._tileOnLoad;
		tile.onerror = this._tileOnError;
		this.getTileUrl(tilePoint, zoom, tile);
	}
});