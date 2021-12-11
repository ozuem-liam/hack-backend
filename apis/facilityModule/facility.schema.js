const mongoose = require('mongoose');

const facility = {
  facility_name: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  facility_email_1: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
  },
  facility_email_2: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
  },
  facility_phone_number_1: {
    type: String,
    maxlength: 20,
    default: '',
    index: {
      unique: true,
      partialFilterExpression: { phone_number: { $gt: '' } },
    },
    trim: true,
  },
  facility_phone_number_2: {
    type: String,
    maxlength: 20,
    default: '',
    index: {
      unique: true,
      partialFilterExpression: { phone_number: { $gt: '' } },
    },
    trim: true,
  },
  facility_front_image: {
    type: String,
  },
  location: {
    type: String,
    maxlength: 15,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  charge_per_trip: {
    type: Number,
    maxlength: 15,
    trim: true,
  },
  number_of_trips: {
    type: Number,
    maxlength: 15,
    trim: true,
  },
  number_of_bins: {
    type: Number,
    maxlength: 15,
    trim: true,
  },
  service_charge: {
    type: Number,
    maxlength: 15,
    trim: true,
  },
  status: {
    type: [String],
    enum: ['Active', 'Completed'],
    default: 'Completed',
  },
  billing_type: {
    type: [String],
    enum: ['PER TRIP', 'MONTHLY'],
    default: 'PER TRIP',
  },
  front_image_cloudinary_id: {
    type: String,
    required: false,
  },
  waste_image_cloudinary_id: {
    type: String,
    required: false,
  },
  external_id: {
    type: String,
    maxlength: 15,
    default: '',
    index: {
      unique: true,
      partialFilterExpression: { external_id: { $gt: '' } },
    },
    trim: true,
  },
  servicing_psp: {
    type: String,
    trim: true,
  },
  facility_waste_image: {
    type: String,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  tariffs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tariff',
    },
  ],
  invoices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice',
    },
  ],
  timestamps: {
    type: Date,
    default: Date.now,
  },
};

const facilityDBSchema = mongoose.Schema(facility);
module.exports = { facilityDBSchema };
