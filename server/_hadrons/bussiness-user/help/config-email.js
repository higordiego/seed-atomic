module.exports = (Organism)=> {
	const nodemailer = require('nodemailer')	
	const template = require('./template-html')

	const config = {
		remetente: 'Seed-Mean <seed-mean@webschool.io>',
		assunto: 'Redefine Password'
	}
	
	const html = template(Organism);
	
	const transporte = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: 'revisacarnissan@gmail.com',
			pass: '<r66189184r>'
		}
	})
	transporte.sendMail({
		from: config.remetente,
		to: Organism.email,
		subject: config.assunto,
		html: html
	}, (err)=>{
		if (err) throw err;
		console.log('E-mail para %s enviado!', Organism.email);

	})

}