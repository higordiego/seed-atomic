import qr from 'qr-image'
import fs from 'fs'

module.exports = (Organelles)=>{
	var qr_svg = qr.image(Organelles._id.toString(), { type: 'png' });
	qr_svg.pipe(fs.createWriteStream('public/imagens/'+ Organelles._id.toString()+ '.png'));
}