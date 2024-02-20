const routes = (handler) => [
    {
        method: 'POST',
        path: '/export/notes',
        handler: handler.postExportNotesHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
];

module.exports = routes;