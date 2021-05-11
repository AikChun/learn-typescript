import { NextFunction, Request, Response, Router } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Forbidden');
}
const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
    <div>Welcome to protected route, logged in user</div>
  `);
});

export { router };

function post(routeName: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    router.post(routeName, target[key]);
  };
}

function use(middleware: any) {
  return function (target: any, key: string, desc: PropertyDescriptor) {};
}
