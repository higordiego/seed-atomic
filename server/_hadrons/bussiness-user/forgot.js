module.exports = (Organism)=>
(req,res)=> {
	const randtoken = require('rand-token');
	const forgot = randtoken.generate(16);

	const query = {$and: [{email: req.params.email}, {status: true}]}
	const mod = {$set: {forgot:forgot }}
	const back = {returnNewDocument: true}
	
	Organism.findOneAndUpdate(query, mod, back)
			.then((organism)=>{
				if(organism){
					organism.forgot = forgot
					require('./help/config-email')(organism)
					res.json({msg: true})
				}else{
					res.json({msg: false})	
				}
			})
			.catch((err)=>{
				throw err
			})
}
