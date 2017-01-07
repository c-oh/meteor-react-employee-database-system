//We declare our collection here in MongoDB so meteor can fetch it, then use react to show it

import {Mongo} from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');

