module.exports = (User) => (req,res)=>{
	
	const query = {$and: [{forgot: req.params.forgot}, {status: true}]}
    const mod   = {_id: 1, name: 1, forgot:1}

	require('../../_organelles/organelle-findOne')(User)(query,mod)(res);		
	
}


