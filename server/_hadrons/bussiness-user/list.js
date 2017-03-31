module.exports = (User) => (req,res)=>{
	
	const select = 'name email login updated_at created_at'
	const query = {}
	const paginate = {
		start: parseInt(req.params.start) || 1,
		end: parseInt(req.params.start) || 10	
	}

	require('../../_organelles/organelle-find')(User)(query,select,paginate)(res);		
	
}


