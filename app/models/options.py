from .db import db


class Options(db.Model):
    __tablename__ = 'options'

    id = db.Column(db.Integer, primary_key=True)
    allow_ls = db.Column(db.Boolean, default=False)
    hints = db.Column(db.Boolean, default=False)