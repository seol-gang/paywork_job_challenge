import { Router, Request, Response, NextFunction } from "express";
import SignInController from "../controllers/users/signIn.controller";

class UserRouter {
  private _router: Router = Router();
  private _signInController: any = SignInController;

  constructor() {
    this._configure();
  }

  get router(): Router {
    return this._router;
  }

  private _configure(): void {
    this._router.get("/", this._signInController.signIn);
  }
}

export = new UserRouter().router;
