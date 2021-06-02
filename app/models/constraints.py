from .db import db


class Constraints(db.Model):
    __tablename__ = 'constraints'
    id = db.Column(db.Integer, primary_key=True)
    generator_id = db.Column(
        db.Integer,
        db.ForeignKey('generators.id'),
        nullable=False)
    uppercase_letters = db.Column(
        db.String(26), default='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    )
    lowercase_letters = db.Column(
        db.String(26), default='abcdefghijklmnopqrstuvwxyz'
    )
    numbers = db.Column(db.String(10), default='1234567890')
    symbols = db.Column(
        db.String,
        default="!# \"$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    )
    pw_length = db.Column(db.Integer, default=10)
    required_uppercase = db.Column(db.Integer, default=1)
    required_numbers = db.Column(db.Integer, default=1)
    required_symbols = db.Column(db.Integer, default=1)
    allow_duplicates = db.Column(db.Boolean, default=True)

    generator = db.relationship('Generator', back_populates='constraints')

    def to_dict(self):
        return {
            id: self.id,
            generator_id: self.generator_id,
            uppercase_letters: self.uppercase_letters,
            lowercase_letters: self.lowercase_letters,
            numbers: self.numbers,
            symbols: self.symbols,
            pw_length: self.pw_length,
            required_uppercase: self.required_uppercase,
            required_numbers: self.required_numbers,
            required_symbols: self.required_symbols,
            allow_duplicates: self.allow_duplicates
        }
