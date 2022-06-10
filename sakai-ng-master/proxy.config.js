const proxy = [
    {
        context: '/api',
        target: 'http://localhost:7576/',
        pathRewrite: { '^/api': '' }
    }
];
module.exports = proxy;
