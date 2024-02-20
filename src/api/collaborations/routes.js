const routes = (handler) => [
    {
        method: 'POST',
        path: '/collaborations',
        handler: handler.postCollaborationHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
    {
        method: 'DELETE',
        path: '/collaborations',
        handler: handler.deleteCollaborationHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
];

module.exports = routes;