from .db import db


class Generator(db.Model):
    __tablename__ = 'generators'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    seed = db.Column(db.Integer, nullable=False)
    iteration = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='generator')
    constraints = db.relationship('Constraints',
                                  uselist=False,
                                  back_populates='generator')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "seed": self.seed,
            "iteration": self.iteration,
            "user_id": self.user_id,
            "constraints": self.constraints.to_dict()
        }
