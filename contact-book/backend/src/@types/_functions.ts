import {Router} from 'express';

export type TRoute = (router?: Router) => void;
export type TConnect = (callback: any) => void