
const{body}=require('express-validator');
const validationFormSignUp=[
    body('user').notEmpty().withMessage('*Ingrese su nombre'),
    body('name').notEmpty().withMessage('*Ingrese su apellido'),
    body('pass').isLength({min:5,max:15}).withMessage('*Ingrese contraseña válida (entre 5 y 15 caracteres)'),
    
    /*body('avatar').custom((value,{ req })=>{
        let file=req.file;
        let acceptedExtensions=['.png', '.webp', '.jpg'];
        if (!file){
            throw new Error('*Debe seleccionar su avatar');
        }else{
            let fileExtension=path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
       
        return true;
    })*/
]

const validationFormLogin=[
    body('user').notEmpty().withMessage('*Ingrese su nombre'),
    body('pass').isLength({min:5,max:15}).withMessage('*Ingrese contraseña válida (entre 5 y 15 caracteres)'),
]

module.exports=validationFormSignUp,validationFormLogin