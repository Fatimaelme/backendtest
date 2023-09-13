const users = require("../Models/Users")
const {v2} = require('cloudinary');
const { trace } = require("../routes");
          
v2.config({ 
  cloud_name: 'dqtnuxova', 
  api_key: '836946917179859', 
  api_secret: 'fSfFo_5qUeu66BqR_kgU1vPR4Bw' 
});

const ajout = async (req, res) =>{
    const profile = new users({
        nom : req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        telephone : req.body.telephone,
        password: req.body.password
    })
    await profile.save()
    res.json('ajouter')
}

const getpofile = async (req,res) =>{
    const ret = await users.find()
    res.json(ret)
}

const modifier = async (req,res)=>{
    const update = await users.findByIdAndUpdate(req.params.id,req.body)
    res.json(msg='updated')
}

const spr= async (req,res)=>{
    const dlt = await users.findByIdAndRemove(req.params.id)
    res.json(msg='deleted')
}

const uploadfile = async(req,res)=>{
    console.log(req.files.image)
    v2.uploader.upload(req.files.image.tempFilePath,
  { public_id: Date.now.toString() }, 
  function(error, result) {console.log(result); })
  res.json('added')
}

module.exports= {
    ajout,
    getpofile,
    modifier,
    spr,
    uploadfile
}