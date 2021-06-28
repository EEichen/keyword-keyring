from .db import db


class Options(db.Model):
    __tablename__ = 'options'

    id = db.Column(db.Integer, primary_key=True)
    allow_ls = db.Column(db.Boolean, default=False)
    hints = db.Column(db.Boolean, default=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='options')
