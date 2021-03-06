const bruteForceSchema = {
  _id: { type: String },
  data: {
    count: Number,
    lastRequest: Date,
    firstRequest: Date
  },
  expires: { type: Date, index: { expires: "1d" } }
};

module.exports = bruteForceSchema;
