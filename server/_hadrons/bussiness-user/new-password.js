module.exports = (Organism)=>
	 (req,res)=> {
	const query = {$and: [{_id: req.body._id}, {forgot: req.body.forgot}] }
	const pass = require('../../_quarks/password')

	function configPass (v) {
		return pass.hash(v);
	}
	
	const mod = {$set: {password: configPass(req.body.password1) , forgot: ''}}

	req.body.password1 == req.body.password2
			? require('../../_organelles/organelle-update')(Organism)(query,mod)(res)
			: res.json({msg: false})
}