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
  modifiedArticleSchema,
} from '../validations';
import { validator } from './../helpers/validation/validate';
import {
  addArticle,
  login,
  signUp,
  getallArticles,
  rateArticle,
  deleteArticle,
  editArticle,
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
  '/article-rating/:articleId',
  validator.params(paramsIdSchema),
  validator.body(articleRatingSchema),
  checkUserRules(),
  rateArticle
);

route.delete(
  '/article/:articleId',
  checkUserRules(),
  validator.params(articleId),
  deleteArticle
);
route.patch(
  '/article',
  upload.single('image'),
  checkUserRules(),
  validator.body(modifiedArticleSchema),
  editArticle
);
export default route;
