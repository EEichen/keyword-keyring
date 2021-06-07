from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Generator, Constraints
import random


password_routes = Blueprint('passwords', __name__)


def keyword_to_number(kw):
    number = 0
    for i in kw:
        number += ord(i)
    return number


def generate_password(generator, keyword):
    return str(generator.seed) + str(keyword)


@password_routes.route('/', methods=['POST'])
@login_required
def generate_all():
    data = request.json
    keyword = data['keyword']
    generators = Generator.query.filter(
        Generator.user_id == current_user.id).all()

    passwords = {}

    for generator in generators:
        password = generate_password(generator, keyword)
        passwords[generator.id] = password

    return passwords


@password_routes.route('/<int:id>', methods=['POST'])
@login_required
def generate_one(id):
    data = request.json
    keyword = data['keyword']
    generator = Generator.query.get(id)

    password = generate_password(generator, keyword)

    return {'id': generator.id, 'password': password}
