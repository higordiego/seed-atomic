module.exports = (User) => (req,res)=>{

	const query = {_id: req.params.id};
	const mod = {token: 0,password:0, __v:0};
	
	require('../../_organelles/organelle-findOne')(User)(query,mod)(res);		
	
}


