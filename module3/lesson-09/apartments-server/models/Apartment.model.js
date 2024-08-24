const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const apartmentSchema = new Schema(
  {
    title: {
      type: String,
    },
    img: {
      type: String,
      default: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
    },
    pricePerDay: {
        type: Number,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Apartment = model("Apartment", apartmentSchema);

module.exports = Apartment;