const routes = (handler) => [
    {
        method: 'POST',
        path: '/notes',
        handler: handler.postNoteHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getNotesHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.putNoteByIdHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler,
        options: {
            auth: 'JBI_JWT',
        },
    },
];

module.exports = routes;