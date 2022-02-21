import express from 'express';
import { celebrate, Joi } from 'celebrate';
import UserController from '../controllers/users.controller';

const usersRouter = express.Router();


/**
 * @description Create user
 * @method POST/
 */

usersRouter.post('/create', 
    celebrate({
        body: Joi.object({
            name: Joi.string()
                .required()
                .messages({
                    "string.empty": "Name is required.",
                }),
            email: Joi.string()
                .email()
                .trim()
                .required()
                .example("user@example.com")
                .messages({
                    "string.email": "Not a valid email address.",
                    "string.empty": "Email is required.",
                }),
            password: Joi.string()
                .trim()
                .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!=_%&*?])[A-Za-z\d#$@!=_%&*?]{8,30}$/))
                .required()
                .example("passW@rd1")
                .messages({
                    "string.pattern.base": "Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                    "string.empty": "password is required.",
                }),
            confirmPassword: Joi.string()
                .valid(Joi.ref('password'))
                .required()
                .example("passW@rd1")
                .messages({
                    "any.only": "Password does not match",
                    "string.empty": "confirm password is required.",
                }),
        }),
    }),
    async (req, res) => await UserController.createUser(req,res)
)
.post('/login',
    celebrate({
        body: Joi.object({
            email: Joi.string()
                .trim()
                .required(),
            password: Joi.string()
                .trim()
                .required()
        })
    }),
    async (req, res) => await UserController.loginUser(req, res)
);



export default usersRouter;
