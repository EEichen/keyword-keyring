from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Generator, Constraints
import random


password_routes = Blueprint('passwords', __name__)


def generate_password(generator):
    return 'random loooooooong string'


@password_routes.route('/', methods=['POST'])
@login_required
def generate_all():
    generators = Generator.query.filter(
        Generator.user_id == current_user.id).all()

    passwords = {}

    for generator in generators:
        password = generate_password(generator)
        passwords[generator.id] = password

    return passwords


@password_routes.route('/<int:id>', methods=['POST'])
@login_required
def generate_one(id):
    generator = Generator.query.get(id)

    password = generate_password(generator)

    return {generator.id: password}
