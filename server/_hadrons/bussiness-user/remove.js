module.exports = (User) => (req,res)=>{

	const query = {_id: req.params.id}
	
	require('../../_organelles/organelles-remove')(User)(query)(res);		
	
}


