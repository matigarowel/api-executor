// Importing required modules
import express, { Request, Response, NextFunction } from 'express';

// Create an instance of an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.post('/exec', (req: Request, res: Response) => {
  let dataResponse: DataResponce = {
    message: "",
    data: null,
    code: 200
  }

  fetch('')
    .then(response => response.json())
    .then(data => {
      dataResponse.data = data
      console.log(data)
    })
    .catch(error => {
    });

  res.status(200).json(dataResponse);
});

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
