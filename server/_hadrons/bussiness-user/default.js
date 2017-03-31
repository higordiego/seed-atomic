module.exports = (User)=> 
	(req,res)=>{
	const query = {}
	const mod = {};
	mod.name =  'higor',
	mod.email = 'higordiegoti@gmail.com'
	mod.login =  'higor'
	mod.password =  '1234'
	require('../../_organelles/organelle-create')(User)(mod)(res);
}
