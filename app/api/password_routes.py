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


def select_character_string(final_seed, strings):
    random.seed(final_seed)
    selector = random.randint(0, len(strings) - 1)

    return strings[selector]


def select_character(final_seed, selected_string, allow_duplicates):
    random.seed(final_seed)
    selector = random.randint(0, len(selected_string) - 1)
    if allow_duplicates:
        return selected_string[selector]
    else:
        return selected_string.pop(selector)


def generate_password(generator, keyword):
    seed = generator.seed
    iteration = generator.iteration
    pw_length = generator.constraints.pw_length
    lowercase_letters = list(generator.constraints.lowercase_letters)
    uppercase_letters = list(generator.constraints.uppercase_letters)
    numbers = list(generator.constraints.numbers)
    symbols = list(generator.constraints.symbols)

    required_uppercase = generator.constraints.required_uppercase
    required_numbers = generator.constraints.required_numbers
    required_symbols = generator.constraints.required_symbols
    allow_duplicates = generator.constraints.allow_duplicates

    final_seed = final_seed_creator(generator, pw_length, keyword)
    password = ''

    for i in range(0, pw_length):
        final_seed += i
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
            del strings[0]
            if required_uppercase <= 0:
                del strings[1]
            if required_numbers <= 0:
                del strings[2]
            if required_symbols <= 0:
                del strings[3]

        if 0 in strings:
            if len(strings[0]) <= 0:
                del strings[0]

        if 1 in strings:
            if len(strings[1]) <= 0:
                del strings[1]

        if 2 in strings:
            if len(strings[2]) <= 0:
                del strings[2]

        if 3 in strings:
            if len(strings[3]) <= 0:
                del strings[3]

        selected_string = select_character_string(
            final_seed,
            list(strings.values())
            )

        if selected_string == uppercase_letters and required_uppercase > 0:
            required_uppercase -= 1
        elif selected_string == numbers and required_numbers > 0:
            required_numbers -= 1
        elif selected_string == symbols and required_symbols > 0:
            required_symbols -= 1

        password += select_character(
            final_seed, selected_string, allow_duplicates)

    return password


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
