import { Router } from 'express';
import { checkUserRules, upload } from './../middlewares';
import {
  articleInformarionSchema,
  loginSchema,
  signUpSchema,
  paramsIdSchema,
  paginationSchema,
  articleRatingSchema,
  articleId,
} from '../validations';
import { validator } from './../helpers/validation/validate';
import {
  addArticle,
  login,
  signUp,
  getallArticles,
  rateArticle,
  deleteArticle,
} from './../controllers';

const route = Router();

route.post('/signup', validator.body(signUpSchema), signUp);
route.post('/login', validator.body(loginSchema), login);

route.post(
  '/article',
  upload.single('image'),
  validator.body(articleInformarionSchema),
  addArticle
);

route.get('/articles', validator.query(paginationSchema), getallArticles);
route.post(
  '/article-rating/:userId/:articleId',
  validator.params(paramsIdSchema),
  validator.body(articleRatingSchema),
  checkUserRules(),
  rateArticle
);

route.delete('/article/:articleId', validator.params(articleId), deleteArticle);
export default route;
