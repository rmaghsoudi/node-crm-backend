import { 
  addNewContact,
  getContacts,
  getContact,
  updateContact
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
      .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
      }, getContacts)

      .post(addNewContact);

  app.route('/contact/:id')
      .get(getContact)

      .patch(updateContact)

      .delete((req, res) => 
      res.send("DELETE request successful!"));
}

export default routes