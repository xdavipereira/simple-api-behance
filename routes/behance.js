import BehanceController from '../controllers/behance';

export default (app) => {
  const behanceController = new BehanceController(app.behance);

  app.route('/projetos')
  .get((req, res) => {
    behanceController.getAllProjects()
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });

  app.route('/projeto/:id')
  .get((req, res) => {
    behanceController.getProject(req.params.id)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });

  app.route('/projeto/:id/comments')
  .get((req, res) => {
    behanceController.getProjectComments(req.params.id)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });


  app.route('/users')
  .get((req, res) => {
    behanceController.getUsers()
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });

  app.route('/user/:id')
  .get((req, res) => {
    behanceController.getUser(req.params.id)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });

  app.route('/user/:id/projects')
  .get((req, res) => {
    behanceController.getUserProjects(req.params.id)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });
};
