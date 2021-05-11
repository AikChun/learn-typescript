import { Request, Response, NextFunction } from 'express';
import { controller, get, post, use, bodyValidator } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email == 'test@example.com' &&
      password === 'password'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
}
