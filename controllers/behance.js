import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class BehanceController {
  constructor(Behance) {
    this.Behance = Behance;
  }

  getAllProjects() {
    return new Promise((resolve, reject) => {
      this.Behance.projects({}, (err, res, data) => {
        if (err) reject(errorResponse(err, HttpStatus.BAD_REQUEST));
        resolve(defaultResponse(data, HttpStatus.OK));
      });
    });
  }

  getProject(id) {
    return new Promise((resolve, reject) => {
      this.Behance.project(id, (err, res, data) => {
        if (err) reject(errorResponse(err, HttpStatus.BAD_REQUEST));
        resolve(defaultResponse(data, HttpStatus.OK));
      });
    });
  }

  getProjectComments(id) {
    return new Promise((resolve, reject) => {
      this.Behance.projectComments(id, (err, res, data) => {
        if (err) reject(errorResponse(err, HttpStatus.BAD_REQUEST));
        resolve(defaultResponse(data, HttpStatus.OK));
      });
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.Behance.users({}, (err, res, data) => {
        if (err) reject(errorResponse(err, HttpStatus.BAD_REQUEST));
        resolve(defaultResponse(data, HttpStatus.OK));
      });
    });
  }

  getUserProjects(id) {
    return new Promise((resolve, reject) => {
      this.Behance.userProjects(id, (err, res, data) => {
        if (err) reject(errorResponse(err, HttpStatus.BAD_REQUEST));
        resolve(defaultResponse(data, HttpStatus.OK));
      });
    });
  }

  getUser(id) {
    return new Promise((resolve, reject) => {
      this.Behance.user(id, (err, res, data) => {
        if (err) reject(errorResponse(err, HttpStatus.BAD_REQUEST));
        resolve(defaultResponse(data, HttpStatus.OK));
      });
    });
  }

}
export default BehanceController;
