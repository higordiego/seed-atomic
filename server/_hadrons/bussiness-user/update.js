module.exports = (User) => (req,res)=>{
	const query = {_id: req.params.id};
	const mod = req.body;
	require('../../_organelles/organelle-update')(User)(query,mod)(res);		
}


