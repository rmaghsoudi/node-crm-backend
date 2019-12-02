import { 
  addNewContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
      .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
      }, getContacts)

      // Create a new contact
      .post(addNewContact);

  app.route('/contact/:id')
      // get a specific contact
      .get(getContact)

      // update a specific contact
      .patch(updateContact)

      // delete a specific contact
      .delete(deleteContact);
}

export default routes