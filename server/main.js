//only executes on server

import _ from 'lodash';
import { Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import {image,helpers} from 'faker';

Meteor.startup(() => {
    //Generate data here

    //Before we generate data, check if the data exists in the collection

    //To see if the collection has records:
    //The ({}) makes sure it does not go through a filter, find every collection there is
    const numberRecords = Employees.find({}).count();

    //console log will show up in terminal and not inspector tools because this is IN the server and not front end
    console.log(numberRecords);

    //! means NOT

    if (!numberRecords) {
        //generate some fake data

        //this is a lodash helper to help clean up a for loop
        // this is a function ->
        _.times(5000, () => {
            const { name, email,phone } = helpers.createCard();
            Employees.insert({ name, email, phone, avatar: image.avatar()

            });
        });
    }

});