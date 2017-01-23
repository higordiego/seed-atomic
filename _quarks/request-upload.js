'use strict'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
module.exports = ()=>{
	const storage = multer.diskStorage({
		destination: 'public/imagens/',
		filename: function (req, file, cb) {
			crypto.pseudoRandomBytes(16, function (err, raw) {
				if (err) return cb(err)
					cb(null, raw.toString('hex') + path.extname(file.originalname))
			})
		}
	});
	return storage;
}