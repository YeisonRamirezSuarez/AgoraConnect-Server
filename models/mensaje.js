const { Schema, model } = require('mongoose');

const MensajeSchema = new Schema({
    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El de es obligatorio']
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El para es obligatorio'],
    },
    mensaje: {
        type: String,
        required: [true, 'El mensaje es obligatorio']
    }
   
},{
    timestamps: true
});


MensajeSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
});

module.exports = model('Mensaje', MensajeSchema);