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


def final_seed_creator(generator, pw_length, keyword):
    iteration = generator.iteration
    seed = generator.seed
    iteration_modifier = pw_length * iteration
    return seed + keyword_to_number(keyword) + iteration_modifier


def select_character_string(final_seed):
    pass


def generate_password(generator, keyword):
    seed = generator.seed
    iteration = generator.iteration
    pw_length = generator.constraints.pw_length
    lowercase_letters = generator.constraints.lowercase_letters
    uppercase_letters = generator.constraints.uppercase_letters
    numbers = generator.constraints.numbers
    symbols = generator.constraints.symbols

    required_uppercase = generator.constraints.required_uppercase
    required_numbers = generator.constraints.required_numbers
    required_symbols = generator.constraints.required_symbols
    allow_duplicates = generator.constraints.allow_duplicates

    final_seed = final_seed_creator(generator, pw_length, keyword)

    for i in range(0, pw_length):
        total_required = (
            required_uppercase +
            required_numbers +
            required_symbols)

        strings = {
            0: lowercase_letters,
            1: uppercase_letters,
            2: numbers,
            3: symbols}

        if total_required >= pw_length - i:
            strings.pop(0)
            if required_uppercase > 0:
                pass

        string = select_character_string(
            final_seed,

            )

    return final_seed


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
