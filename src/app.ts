import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { body, validationResult } from 'express-validator';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

interface Credentials {
  email: string;
  password: string;
}

const hardcodedCredentials: Credentials = {
  email: 'admin@example.com',
  password: 'passWord123',
};

// Note: this should have been in .env file, if it wasn't a test
const secretKey = 'helloWorldBuddy';

app.post(
  '/login',
  body('email').isEmail().withMessage('Неверный формат email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Пароль должен быть длиннее 8 символов')
    .matches(/^[a-zA-Z0-9]*$/)
    .withMessage('Пароль может содержать только буквы и цифры'),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('validation errors:', errors);
      return res
        .status(400)
        .json({ errors: errors.array().map(err => err.msg) });
    }

    const { email, password } = req.body;

    if (
      email === hardcodedCredentials.email &&
      password === hardcodedCredentials.password
    ) {
      const token = jwt.sign({ email: email }, secretKey, { expiresIn: '1d' });
      console.log('Success message:', 'Данные совпадают');
      return res
        .status(200)
        .json({ message: 'Поздравляю! Вы авторизованы!', token });
    } else {
      console.error('Error message:', `ошибка в данных пользователя ${email}`);
      return res.status(401).json({
        message: 'Доступ запрещен! Неправильные данные пользователя!',
      });
    }
  }
);

// Note: this should have been in .env file, if it wasn't a test
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
