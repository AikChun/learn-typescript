import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made.');
  next();
}

@controller('/auth')
export class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response) {
    res.send(`
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password"/>
          </div>
          <button>Submit</button>
        </form>
  `);
  }
}
