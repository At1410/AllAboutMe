const express = require('express');
const cors = require('cors');

const connectDB = require('./database/connectDB');
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.router');
const sendEmailRoutes = require('./routes/email.router');
const protectedRoutes = require('./routes/protected.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Sử dụng OpenAPI 3.0
        info: {
            title: 'All About Me API',
            version: '1.0.0',
            description: 'API for All About Me',
            contact: {
                name: 'A\'t',
            },
            servers: [
                {
                    url: 'http://localhost:5000', // Thay đổi URL nếu cần
                },
            ],
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

connectDB();
app.get('/', (req, res) => {
    res.json({ message: 'Hello from project AT!' });
});

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/email', sendEmailRoutes);
app.use('/protected', protectedRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

