const routes = (app) => {
    app.route('/card')
        .get((req, res) =>
            res.send('GET request successful'))

        .post((req, res) => 
            res.send('POST request successful'));

    app.route('/card/:cardID')
        .put((req, res) => 
            res.send('PUT request successful'))

        .delete((req, res) => 
            res.send('DELETE request successful'));
}

export default routes;