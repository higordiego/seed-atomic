module.exports = (User) => (req,res)=>{
	const mod = {}
	mod.name = req.body.name
	mod.login = req.body.login
	mod.password = req.body.password
	mod.email = req.body.email
	require('../../_organelles/organelle-create')(User)(mod)(res);		
	
}


