import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: {type: String, required: true}, //Tipo String y debe ser puesto necesariamente
    description: String,
    imageURL: String,
    price: Number,
    createdAt: { //Es de tipo date, en caso de no ponerle, por defecto pon la fecha de hoy
        type: Date,
        default: Date.now()
    }
});