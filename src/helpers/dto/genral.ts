import { Request } from 'express';
import { Body, Params, Query } from '../../interface/genral';
export const bodyData = (data: Request): Body => data.body;

export const paramsData = (data: Request): Params => data.params;

export const queryData = (data: Request): Query => data.query;
