import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact);
  });
}

export const getContacts = (req, res) => {
 Contact.find({}, (err, contacts) => {
    if (err) {
      res.send(err)
    }
    res.json(contacts);
  });
}

export const getContact = (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
     if (err) {
       res.send(err)
     }
     res.json(contact);
   });
 }

 export const updateContact = (req, res) => {
   // findOneAndUpdate( ObjectId, updateParams, new: true -returns the updated object,
  //  useFindAndModify: false -uses new functions as opposed to deprecated ones )
  Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false },  (err, contact) => {
     if (err) {
       res.send(err)
     }
     res.json(contact);
   });
 }

 export const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.id }, (err) => {
     if (err) {
       res.send(err)
     }
     res.json({ message: 'Successfully deleted contact!' });
   });
 }